import React, { Component } from "react";
import { Link, Router } from "../routes";
import {
  Form,
  Button,
  Message,
  Segment,
  Icon,
  Checkbox,
  Grid,
  Loader
} from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import web3 from "../ethereum/src/web3";
import contract from "../ethereum/src/contract";
import swal from "sweetalert2";
import { setCookie } from "../utils/CookieUtils";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      loading: false,
      metaMask: true,
      error: false
    };
    this.submit = e => this._submit();
  }

  async componentWillMount() {
    setInterval(() => {
      web3.eth.getAccounts((err, accounts) => {
        if (err != null) console.error("An error occurred: " + err);
        else if (accounts.length == 0) this.setState({ metaMask: false });
        else this.setState({ metaMask: true, myAddress: accounts[0] });
      });
    }, 500);
  }

  async _submit() {
    let accounts = await web3.eth.getAccounts();

    if (this.state.value > 0) {
      this.setState({ loading: true, error: false });
      await contract.methods.payKYC().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether")
      });
      let response = await axios.post(window.location.origin + "/payment");
      swal({
        title: "Congratulations!",
        text:
          "You have paid. You will be redirected to the video identification",
        type: "success",
        onClose: () => {
          setCookie("x-access-token", response.data.paymentCookie, 1);
          Router.push("/videochat");
        }
      });
    } else if (this.state.value == 0) {
      setCookie("x-access-token", response.data.paymentCookie, 1);
      Router.push("/videochat");
    } else {
      this.setState({ error: true });
    }
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        {this.state.metaMask == false ? (
          <Message
            error
            content="Please login to Metamask"
            style={{ marginTop: "5px", marginLeft: "120px", width: "900px" }}
          />
        ) : null}
        <Layout>
          <Segment
            style={{
              maxWidth: "450px",
              margin: "auto",
              marginTop: "50px"
            }}
          >
            <Header
              as="h1"
              textAlign="center"
              style={{ marginTop: 60, color: "#2985d0" }}
            >
              Payment
            </Header>
            <Header as="h3" textAlign="center" style={{ marginBottom: 20 }}>
              Please enter a value you are willing to pay
            </Header>
            <br />
            <Form onSubmit={this.submit} error={this.state.error}>
              <Form.Field>
                {/* <label> Username </label> */}
                <Form.Input
                  icon="ethereum"
                  iconPosition="left"
                  placeholder="Ether"
                  id="value"
                  value={this.state.value}
                  onChange={event =>
                    this.setState({ value: event.target.value })
                  }
                />
              </Form.Field>
              {/* {this.state.error ?  */}
              <Message error header="Oops!" content="Please enter a value" />
              <Button
                fluid
                icon
                size="large"
                color="blue"
                loading={this.state.loading}
              >
                <Icon name="check circle outline" size="large" />
              </Button>
            </Form>
          </Segment>
        </Layout>
      </div>
    );
  }
}

export default Login;

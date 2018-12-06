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
    this.toVideo = this.toVideo.bind(this);
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

    if (this.state.value) {
      this.setState({ loading: true, error: false });
      await contract.methods.payKYC().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether")
      });
    } else {
      this.setState({ error: true });
    }
    //success message and routing
    this.setState({ loading: false });
    swal(
      "Congratulations!",
      "You have paid. You will be redirected to the video identification",
      "success"
    );
    Router.push("/videochat");
  }

  toVideo() {
    Router.push("/videochat");
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

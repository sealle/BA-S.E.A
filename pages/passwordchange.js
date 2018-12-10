import React, { Component } from "react";
import { Link, Router } from "../routes";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Icon,
  Segment,
  Form,
  Message,
  Header
} from "semantic-ui-react";
import Layout from "../components/Layout";
import axios from "axios";
import swal from "sweetalert2";
import jwtDecode from "jwt-decode";

class PwChange extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: "",
      password: "",
      confirmPassword: "",
      username: ""
    };
    this.confirmP = e => this._confirmP();
  }

  //decode token in link to receive username
  componentDidMount() {
    let token = window.location.pathname.split("/");
    let decoded = jwtDecode(token[2]);
    this.setState({ username: decoded.username });
  }

  //send new password to server
  async _confirmP() {
    if (this.state.password == this.state.confirmPassword) {
      const formData = new FormData();
      formData.append("password", this.state.password);
      formData.append("username", this.state.username);

      this.setState({ loading: true });

      try {
        const res = await axios.post(
          window.location.origin + "/changepw",
          formData
        );
        if (res.data.success) {
          swal(
            "Congratulations!",
            "Your password has been changed!",
            "success"
          );
          Router.push("/login");
        } else {
          this.setState({ errorMessage: res.data.message });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      this.setState({
        errorMessage: "Passwords are not the same!"
      });
    }

    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        <Layout>
          <style>{`
        body {
          background: #e6e6e6;
        }
      `}</style>
          <Segment
            style={{ maxWidth: "450px", margin: "auto", marginTop: "50px" }}
          >
            <br />
            <Header
              as="h1"
              textAlign="center"
              style={{ color: "#2985d0", marginTop: "10px" }}
            >
              Password Reset
            </Header>
            <Header as="h3" textAlign="center" style={{ marginBottom: 20 }}>
              Please enter your username and select a new password and confirm
              it
            </Header>
            <Form onSubmit={this.confirmP} error={this.state.errorMessage}>
              <Form.Field>
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={event =>
                    this.setState({ password: event.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                {/* <label>Password</label> */}
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={event =>
                    this.setState({ confirmPassword: event.target.value })
                  }
                />
              </Form.Field>
              <Message error header="Oops!" content={this.state.errorMessage} />
              <Button
                fluid
                icon
                size="large"
                color="blue"
                loading={this.state.loading}
              >
                Confirm
              </Button>
            </Form>
          </Segment>
        </Layout>
      </div>
    );
  }
}

export default PwChange;

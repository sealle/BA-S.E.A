import React, { Component } from "react";
import { Link, Router } from "../routes";
import { Form, Button, Message } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import axios from "axios";
import { setCookie } from "../utils/CookieUtils";
import HomeHeader from "../components/HomeHeader";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      username: "",
      errorMessage: "",
      loading: false
    };
    this.login = e => this._login();
  }

  async _login() {
    const formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);
    formData.append("errorMessage", this.state.errorMessage);

    this.setState({ loading: true });

    try {
      const res = await axios.post(
        window.location.origin + "/authenticate",
        formData
      );
      if (res.data.success) {
        if (res.data.registerStatus == "yes") {
          if (res.data.token) {
            setCookie("x-access-token", res.data.token);
            Router.push("/profile");
          } else {
            setCookie("x-access-token", res.data.adminToken);
            Router.push("/admin");
          }
        } else {
          setCookie("x-access-token", res.data.token);
          Router.push("/terms");
        }
      }
    } catch (error) {
      this.setState({
        errorMessage: error.response.data.message
      });
    }

    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        <HomeHeader />
        <Layout>
          <Header as="h1" textAlign="center" style={{ marginTop: 60 }}>
            Welcome
          </Header>
          <Header as="h3" textAlign="center" style={{ marginBottom: 20 }}>
            Please login or register
          </Header>
          <Form onSubmit={this.login} error={this.state.errorMessage}>
            <Form.Field>
              <label> Username </label>
              <input
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={event =>
                  this.setState({ username: event.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </Form.Field>
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button loading={this.state.loading}>Login</Button>
            <Link route="/register">
              <Button primary floated="right">
                Register
              </Button>
            </Link>
          </Form>
        </Layout>
      </div>
    );
  }
}

export default Login;

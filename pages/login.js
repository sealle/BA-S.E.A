import React, { Component } from "react";
import { Link, Router } from "../routes";
import {
  Form,
  Button,
  Message,
  Segment,
  Icon,
  Checkbox
} from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import axios from "axios";
import { setCookie } from "../utils/CookieUtils";
import HomeHeader from "../components/HomeHeader";
import jwtDecode from "jwt-decode";
import Helmet from "react-helmet";

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
        if (res.data.registerStatus == "yes" && res.data.privileg == "admin") {
          setCookie("x-access-token", res.data.adminToken, 1);
          Router.push("/admin");
        } else if (
          res.data.registerStatus == "yes" &&
          res.data.privileg == "user"
        ) {
          setCookie("x-access-token", res.data.userToken, 1);
          Router.push("/profile");
        } else {
          setCookie("x-access-token", res.data.registerToken, 1);
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
        {/* <HomeHeader /> */}
        <Layout>
          {/* <Header as="h3" textAlign="center" style={{ marginBottom: 20 }}>
            Please login or register
          </Header> */}
          <Segment
            style={{
              maxWidth: "450px",
              margin: "auto",
              // backgroundColor: "#2985d0",
              marginTop: "50px"
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "-50px" }}>
              <Icon circular name="users" size="huge" fluid color="blue" />
            </div>
            <Header
              as="h1"
              textAlign="center"
              style={{ marginTop: 60, color: "#2985d0" }}
            >
              Member Login
            </Header>
            <br />
            <Form onSubmit={this.login} error={this.state.errorMessage}>
              <Form.Field>
                {/* <label> Username </label> */}
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={event =>
                    this.setState({ username: event.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                {/* <label>Password</label> */}
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
              <Message error header="Oops!" content={this.state.errorMessage} />
              <Button
                fluid
                icon
                size="large"
                color="blue"
                loading={this.state.loading}
              >
                Login
                <Icon name="sign-in" />
              </Button>
              {/* <Form.Field> //TODO: make Grid!
                <Checkbox
                  fluid
                  label="Remember me"
                  style={{ marginTop: "10px" }}
                >
                  Remember me
                </Checkbox>
                <a href="#" sytle={{ textAlign: "right" }}>
                  Forgot Password
                </a>
              </Form.Field> */}
            </Form>
          </Segment>
          <br />
          <Message
            style={{
              maxWidth: "450px",
              margin: "auto",
              textAlign: "center",
              backgroundColor: "white"
            }}
          >
            New to us?{" "}
            <a href="/register" style={{ color: "#2985d0" }}>
              Register
            </a>
          </Message>

          {/* <Link route="/register">
              <Button primary fluid>
                Register
              </Button>
            </Link> */}
        </Layout>
      </div>
    );
  }
}

export default Login;

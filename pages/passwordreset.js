import React, { Component } from "react";
import { Link, Router } from "../routes";
import {
  Button,
  Message,
  Icon,
  Segment,
  Form,
  Header
} from "semantic-ui-react";
import Layout from "../components/Layout";
import axios from "axios";
import swal from "sweetalert2";

class PwReset extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: "",
      username: "",
      email: ""
    };
    this.pwReset = e => this._pwReset();
  }

  //send username and email to server
  async _pwReset() {
    const formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("email", this.state.email);
    formData.append("errorMessage", this.state.errorMessage);

    this.setState({ loading: true });

    try {
      const res = await axios.post(
        window.location.origin + "/passwordreset",
        formData
      );
      if (res.data.success) {
        swal(
          "Congratulations!",
          "An email has been sent to you. Please click on the link in the email to proceed",
          "success"
        );
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
              Please enter your username and your email address
            </Header>
            <Form onSubmit={this.pwReset} error={this.state.errorMessage}>
              <Form.Field>
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
                  icon="mail"
                  iconPosition="left"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={event =>
                    this.setState({ email: event.target.value })
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
                Submit
              </Button>
            </Form>
          </Segment>
        </Layout>
      </div>
    );
  }
}

export default PwReset;

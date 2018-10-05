import React, { Component } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import { Header, Container, Button } from "semantic-ui-react";
import { Router } from "../routes";

class Error extends Component {
  constructor() {
    super();
  }

  backToProfile() {
    Router.pushRoute("/profile");
  }
  //error page if someone tries to access Admin page
  render() {
    return (
      <div>
        <Layout>
          <Header
            as="h1"
            textAlign="center"
            style={{ marginTop: 60, color: "red" }}
          >
            You are not entitled to see this page!
          </Header>
          <Container textAlign="center">
            <Button href="/profile" onClick={this.backToProfile}>
              Back to profile
            </Button>
          </Container>
        </Layout>
      </div>
    );
  }
}

export default Error;

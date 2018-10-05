import React, { Component } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import { Header, Container } from "semantic-ui-react";
import axios from "axios";

class adminPage extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: ""
    };
  }

  async componentDidMount() {
    const response = await axios.get(window.location.origin, "/admin");
    if (response.data.success == false) {
      Router.push("/profile");
    }
  }

  render() {
    return (
      <div>
        <ProfileHeader />
        <Layout>
          <Header as="h1" textAlign="center" style={{ marginTop: 60 }}>
            Hello
          </Header>
          <Container textAlign="center">
            <div />
            {this.state.errorMessage}
          </Container>
        </Layout>
      </div>
    );
  }
}

export default adminPage;

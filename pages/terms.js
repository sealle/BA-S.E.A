import React, { Component } from "react";
import { Link, Router } from "../routes";
import { Button, Checkbox, Container, Divider, Icon } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import ProfileHeader from "../components/ProfileHeader";

class Terms extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <Layout>
          <Header as="h1" textAlign="center" style={{ marginTop: 60 }}>
            Terms and Conditions
          </Header>
          <Header as="h3" textAlign="center" style={{ marginBottom: 20 }}>
            Make sure you accept all terms and conditions
          </Header>
          <Container textAlign="center">
            <p>aklshdflakjsdhfkahsdf</p>
            <Checkbox
              label="I agree that I have my identity card ready"
              required
            />
            <Divider />
            <p>aksjdgfljhasdfsdfljasldkjhf</p>
            <Checkbox
              label="I agree that the audio line is beeing recorded"
              required
            />
            <Divider />
            <p>aksjdgfljhasdfsdfljasldkjhf</p>
            <Checkbox label="I agree the terms and conditions" required />
            <Divider />
            <Link route="/videochat">
              <Button primary icon labelPosition="right">
                Next
                <Icon name="right arrow" />
              </Button>
            </Link>
          </Container>
        </Layout>
      </div>
    );
  }
}

export default Terms;

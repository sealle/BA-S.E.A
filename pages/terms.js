import React, { Component } from "react";
import { Link, Router } from "../routes";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Icon,
  Segment
} from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import ProfileHeader from "../components/ProfileHeader";

class Terms extends Component {
  render() {
    return (
      <div>
        {/* <ProfileHeader /> */}
        <Layout>
          <style>{`
        body {
          background: #e6e6e6;
        }
      `}</style>
          <Segment style={{ marginTop: "50px" }}>
            <br />
            <Header
              as="h1"
              textAlign="center"
              style={{ color: "#2985d0", marginTop: "10px" }}
            >
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
          </Segment>
        </Layout>
      </div>
    );
  }
}

export default Terms;

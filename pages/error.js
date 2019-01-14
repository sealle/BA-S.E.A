import React, { Component } from "react";
import Layout from "../components/Layout";
import { Header, Container, Button } from "semantic-ui-react";
import { Router, Link } from "../routes";
import axios from "axios";
import jwtDecode from "jwt-decode";

class Error extends Component {
  constructor() {
    super();
    this.state = {
      isAdmin: false,
      isUser: false,
      isReg: false,
      inVideochat: false,
      cookie: ""
    };
  }

  //landing page if unauthorized user tries to access page
  async componentWillMount() {
    const res = await axios.post(window.location.origin + "/currentuser");
    if (res.data.success) {
      this.setState({ cookie: res.data.cookie });
    }
    let decoded = jwtDecode(this.state.cookie);
    //get role of user to redirect them to their page
    if (decoded.role === 1) {
      this.setState({ isAdmin: true });
    } else if (decoded.role === 0 && decoded.reg === 1) {
      this.setState({ isUser: true });
    } else if(decoded.paid === 1) {
      this.setState({inVideochat: true})
    } else {
      this.setState({ isReg: true });
    }
  }
  
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
          {this.state.isAdmin ? (
            <Container textAlign="center">
              <Link route="/admin">
                <Button primary>Back</Button>
              </Link>
            </Container>
          ) : null}
          {this.state.isUser ? (
            <Container textAlign="center">
              <Link route="/profile">
                <Button primary>Back</Button>
              </Link>
            </Container>
          ) : null}
          {this.state.isReg ? (
            <Container textAlign="center">
              <Link route="/clickandpay">
                <Button primary>Back</Button>
              </Link>
            </Container>
          ) : null}
            {this.state.inVideochat ? (
            <Container textAlign="center">
              <Link route="/videochat">
                <Button primary>Back</Button>
              </Link>
            </Container>
          ) : null}
        </Layout>
      </div>
    );
  }
}

export default Error;

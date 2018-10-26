import React, { Component } from "react";
import { Link, Router } from "../routes";
import { Button, Container } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import axios from "axios";
import { getCookie } from "../utils/CookieUtils";
import ProfileHeader from "../components/ProfileHeader";
import jwtDecode from "jwt-decode";
import UserData from "../components/UserData";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    // this.testCSRF = e => this._testCSRF();
  }

  // async _testCSRF() {
  //   const token = getCookie("x-access-token");
  //   const decoded = jwtDecode(token);
  //   try {
  //     const res = await axios.post(
  //       window.location.origin + "/api/preventCRSF",
  //       {
  //         example: "data"
  //       },
  //       {
  //         headers: {
  //           "X-XSRF-TOKEN": decoded.xsrfToken
  //         }
  //       }
  //     );
  //     if (res.data.success) {
  //       this.setState({
  //         message: res.data.message
  //       });
  //     }
  //   } catch (error) {
  //     this.setState({
  //       message: error.response.data.message
  //     });
  //   }
  // } //!Only for test purposes

  render() {
    return (
      <div>
        <ProfileHeader />
        <UserData />
        {/* <Layout>
          <br />
          <br />
          <Container textAlign="center">
            <Button onClick={this.testCSRF}>
              Access API protected by CSFR
            </Button>
            <span>{this.state.message}</span>
          </Container>
        </Layout> */}
      </div>
    );
  }
}

export default Profile;

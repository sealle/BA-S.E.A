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

//render UserData and ProfileHeader components
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div>
        <ProfileHeader />
        <UserData />
        <Layout>
          <style>{`
        body {
          background: #e6e6e6;
        }
      `}</style>
        </Layout>
      </div>
    );
  }
}

export default Profile;

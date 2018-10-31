import React, { Component } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import { Header, Container, Grid, Menu, Message } from "semantic-ui-react";
import axios from "axios";
import VideoChat from "../components/VideoChat";
import UserList from "../components/UserList";
// import UserApproval from "../components/UserApproval";
import Head from "next/head";

class adminPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ProfileHeader />
        <Layout>
          <Container style={{ width: "100%" }}>
            <Head>
              <link
                rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
              />
            </Head>
            <style>{`
        body {
          background: #e6e6e6;
        }
      `}</style>
          </Container>
        </Layout>
      </div>
    );
  }
}

export default adminPage;

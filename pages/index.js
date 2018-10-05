import React, { Component } from "react";
import { Link, Router } from "../routes";
import {
  Button,
  Table,
  Container,
  Divider,
  Icon,
  Form
} from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import HomeHeader from "../components/HomeHeader";

class Index extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Layout>
          <Header as="h1" textAlign="center" style={{ marginTop: 60 }}>
            Welcome back
          </Header>
          <Header as="h3" textAlign="center" style={{ marginBottom: 20 }}>
            ...
          </Header>
        </Layout>
      </div>
    );
  }
}

export default Index;

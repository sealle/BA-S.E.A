import React, { Component } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import { Header, Container, Grid, Segment, Menu } from "semantic-ui-react";
import axios from "axios";
import VideoChat from "../components/VideoChat";
import UserList from "../components/UserList";
import Head from "next/head";

class adminPage extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: "",
      activeItem: "home"
    };
  }

  async componentDidMount() {
    const response = await axios.get(window.location.origin, "/admin");
    if (response.data.success == false) {
      Router.push("/profile");
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <ProfileHeader />
        <Container style={{ width: "100%" }}>
          <Head>
            <link
              rel="stylesheet"
              href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
            />
          </Head>
          <Grid>
            <Grid.Column width={2}>
              <Menu fluid vertical tabular="left">
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="userlist"
                  active={activeItem === "userlist"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="videochat"
                  active={activeItem === "videochat"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>

            <Grid.Column stretched width={14}>
              <Container>
                {this.state.activeItem === "userlist" ? <UserList /> : null}
                {this.state.activeItem === "videochat" ? <VideoChat /> : null}
                {this.state.activeItem === "home" ? (
                  <Layout>
                    <Header
                      as="h1"
                      style={{ textAlign: "center", marginTop: "30px" }}
                    >
                      Welcome to the Admin Page
                    </Header>
                  </Layout>
                ) : null}
              </Container>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default adminPage;

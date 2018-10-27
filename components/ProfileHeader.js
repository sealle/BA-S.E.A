import React, { Component } from "react";
import { Menu, Icon, Container, Header, Segment } from "semantic-ui-react";
import { setCookie } from "../utils/CookieUtils";
import { Router, Link } from "../routes";
import axios from "axios";
import Layout from "./Layout";
import UserList from "./UserList";
import VideoChat from "./VideoChat";

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      currentUser: "",
      activeItem: "home"
    };
    this.logout = e => this._logout();
  }

  async componentDidMount() {
    try {
      const response = await axios.post(
        window.location.origin + "/currentuser"
      );
      if (response.data.success) {
        this.setState({ currentUser: response.data.currentUser });
        if (response.data.currentUser === "Admin") {
          this.setState(activeItem === "home");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  _logout() {
    setCookie("x-access-token", "", -60 * 60);
    Router.pushRoute("/login");
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing>
          <Menu.Item name="home">
            <Icon name="home" size="small" />
          </Menu.Item>
          {this.state.currentUser === "Admin" ? (
            <Menu.Menu>
              <Menu.Item
                color="blue"
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="userlist"
                active={activeItem === "userlist"}
                onClick={this.handleItemClick}
                color="blue"
              />
              <Menu.Item
                name="videochat"
                // href="/videochat"
                active={activeItem === "videochat"}
                onClick={this.handleItemClick}
                color="blue"
              />
            </Menu.Menu>
          ) : null}
          <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={this.logout} />
            <Menu.Item>
              <Icon name="user" size="small" />
              <p>{this.state.currentUser}</p>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Layout>
          <style jsx global>{`
            body {
              background: #e6e6e6;
            }
          `}</style>
          {this.state.currentUser === "Admin" ? (
            <div>
              {this.state.activeItem === "userlist" ? <UserList /> : null}
              {this.state.activeItem === "videochat" ? (
                <div>
                  <VideoChat />
                  {/* <UserApproval /> */}
                </div>
              ) : null}
              {this.state.activeItem === "home" ? (
                <Segment
                  style={{
                    marginTop: "50px",
                    marginLeft: "-126px",
                    width: "900px"
                  }}
                >
                  <Header
                    as="h1"
                    style={{
                      textAlign: "center",
                      marginTop: "10px",
                      color: "#2985d0",
                      marginBottom: "10px"
                    }}
                  >
                    Welcome to the Admin Page
                  </Header>
                </Segment>
              ) : null}
            </div>
          ) : null}
        </Layout>
      </div>
    );
  }
}

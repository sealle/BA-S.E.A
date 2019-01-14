import React, { Component } from "react";
import { Menu, Icon, Container, Header, Segment } from "semantic-ui-react";
import { setCookie } from "../utils/CookieUtils";
import { Router, Link } from "../routes";
import axios from "axios";
import Layout from "./Layout";

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      currentUser: "",
      // activeItem: "videochat"
    };
    // this.logout = e => this._logout();
  }

  //get current user to display 
  async componentDidMount() {
    try {
      const response = await axios.post(
        window.location.origin + "/currentuser"
      );
      if (response.data.success) {
        this.setState({ currentUser: response.data.currentUser });
      }
    } catch (err) {
      console.log(err);
    }
  }

  //on logout, delete cookies
  logout = () => {
    setCookie("x-access-token", "", -60 * 60);
    Router.pushRoute("/login");
    window.location.href = "/login";
  }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    // const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing>
          <Menu.Item name="home">
            <Icon name="home" size="small" />
          </Menu.Item>
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
        </Layout>
      </div>
    );
  }
}

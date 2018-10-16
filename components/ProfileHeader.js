import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { setCookie } from "../utils/CookieUtils";
import { Router, Link } from "../routes";
import axios from "axios";

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      currentUser: ""
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
      }
    } catch (err) {
      console.log(err);
    }
  }

  _logout() {
    setCookie("x-access-token", "", -60 * 60);
    Router.pushRoute("/login");
  }

  adminPage = e => {
    Router.pushRoute("/admin");
  };

  render() {
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
      </div>
    );
  }
}

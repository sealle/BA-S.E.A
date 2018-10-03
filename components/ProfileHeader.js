import React, { Component } from "react";
import {
  Menu,
  Segment,
  Icon,
  Button,
  Form,
  Container
} from "semantic-ui-react";
import { setCookie } from "../utils/CookieUtils";
import { Router, Link } from "../routes";
import getCurrentUser from "../utils/UserUtils";

export default class ProfileHeader extends Component {
  constructor() {
    super();

    this.logout = e => this._logout();
    this.currentUser = getCurrentUser();
  }

  _logout() {
    setCookie("x-access-token", "", -60 * 60);
    Router.pushRoute("/login");
  }

  profileBack = e => {
    Router.pushRoute("/profile");
  };

  userProfile = e => {
    Router.pushRoute("/userdata");
  };

  render() {
    return (
      <div>
        <Menu pointing>
          <Menu.Item name="home" onClick={this.profileBack}>
            <Icon name="home" size="small" />
          </Menu.Item>
          <Menu.Item name="view profile" onClick={this.userProfile} />
          <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={this.logout} />
            <Menu.Item>
              <Icon name="user" size="small" />
              <p>{this.currentUser}</p>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

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
import Head from "next/head";

const HomeHeader = () => (
  <Menu>
    <Menu.Menu position="right">
      <Menu.Item name="login" href="/login">
        Login
      </Menu.Item>

      <Menu.Item name="register" href="/register">
        Register
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default HomeHeader;

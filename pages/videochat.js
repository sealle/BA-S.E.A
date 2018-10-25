import React, { Component } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import MediaHandler from "../webrtc/MediaHandler";
import Pusher from "pusher-js";
import Peer from "simple-peer";
const APP_KEY = "0f924dcd44dc93a88aa7"; //Pusher Key
import { Header, Message } from "semantic-ui-react";
import { getCookie } from "../utils/CookieUtils";
import jwtDecode from "jwt-decode";
import getCurrentUser from "../utils/UserUtils";
import axios from "axios";
import VideoChat from "../components/VideoChat";

export default class VideoChatPage extends Component {
  render() {
    return (
      <div>
        {/* <ProfileHeader /> */}
        <Layout>
          <VideoChat />
        </Layout>
      </div>
    );
  }
}

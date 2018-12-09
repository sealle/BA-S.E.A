import React, { Component } from "react";
import Layout from "../components/Layout";
import VideoChat from "../components/VideoChat";

export default class VideoChatPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <VideoChat />
        </Layout>
      </div>
    );
  }
}

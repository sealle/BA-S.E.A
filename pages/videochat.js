import React, { Component } from "react";
import Layout from "../components/Layout";
import VideoChat from "../components/VideoChat";

//render video chat component
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

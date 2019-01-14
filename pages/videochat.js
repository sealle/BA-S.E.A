import React, { Component } from "react";
import Layout from "../components/Layout";
import dynamic from "next/dynamic"
const VideoChat = dynamic(import('../components/VideoChat'), {
  ssr: false
})

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

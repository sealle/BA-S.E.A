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

let xsrf = "";

let user = {
  id: ""
};
let xsrfToken = "";

export default class VideoChatPage extends Component {
  constructor() {
    super();
    this.state = {
      hasMedia: false,
      otherUserId: "",
      memberId: ""
    };

    this.user = user;
    this.user.stream = null;
    this.peers = {};

    this.mediaHandler = new MediaHandler();
    this.setupPusher();

    this.callTo = this.callTo.bind(this);
    this.setupPusher = this.setupPusher.bind(this);
    this.startPeer = this.startPeer.bind(this);
  }

  async componentWillMount() {
    try {
      const response = await axios.post(
        window.location.origin + "/currentuser"
      );
      xsrf = response.data.token;
      user.id = response.data.currentUser;
      xsrfToken = xsrf;
    } catch (e) {
      console.log(e);
    }

    console.log(this.user.id);
    console.log(xsrfToken);

    this.mediaHandler.getPermissions().then(stream => {
      this.setState({ hasMedia: true });
      this.user.stream = stream;

      try {
        this.myVideo.srcObject = stream;
      } catch (e) {
        this.myVideo.src = URL.createObjectURL(stream);
      }

      this.myVideo.play();
    });
  }

  setupPusher() {
    //TODO: Pusher only one way: User->Admin
    Pusher.logToConsole = true;
    this.pusher = new Pusher(APP_KEY, {
      authEndpoint: "/pusher/auth",
      cluster: "eu",
      auth: {
        params: this.user.id,
        headers: {
          "X-XSRF-Token": xsrfToken
        }
      }
    });

    this.channel = this.pusher.subscribe("presence-video-channel"); //presence: requires auth!

    // this.channel.bind("pusher:subscription_succeeded", function() {
    //   console.log("success");
    // });
    // this.channel.bind("pusher:member_removed", function(members) {
    //   console.log(member.id + "removed");
    // });
    // this.channel.bind("pusher:member_added", function(members) {
    //   console.log(member.id + "added");
    // });

    this.channel.bind(`client-signal-${this.user.id}`, signal => {
      let peer = this.peers[signal.userId];
      // if peer does not already exist, we got an incoming call
      if (peer === undefined) {
        this.setState({ otherUserId: signal.userId });
        peer = this.startPeer(signal.userId, false);
      }

      peer.signal(signal.data);
    });
  }

  startPeer(userId, initiator = true) {
    //TODO: initiator is always user!
    const peer = new Peer({
      initiator,
      stream: this.user.stream,
      trickle: false
    });

    peer.on("signal", data => {
      this.channel.trigger(`client-signal-${userId}`, {
        type: "signal",
        userId: this.user.id,
        data: data
      });
    });

    peer.on("stream", stream => {
      try {
        this.myVideo.srcObject = stream; //bug -> why is the stream reloading?
      } catch (e) {
        this.myVideo.src = URL.createObjectURL(stream);
      }

      this.myVideo.play();
    });

    peer.on("close", () => {
      let peer = this.peers[userId];
      if (peer !== undefined) {
        peer.destroy(err);
      }

      this.peers[userId] = undefined;
    });
    return peer;
  }

  callTo(userId) {
    this.peers[userId] = this.startPeer(userId);
  }

  render() {
    return (
      <div>
        <ProfileHeader />
        <Layout>
          <Header as="h1" style={{ textAlign: "center", marginTop: "30px" }}>
            Video Chat
          </Header>
          {["Sebster", "sdfg"].map(userId => {
            return this.user.id !== userId ? (
              <button key={userId} onClick={() => this.callTo(userId)}>
                Call {userId}
              </button>
            ) : null;
          })}
          <div
            className="video-container"
            style={{
              width: "650px",
              height: "380px",
              margin: "0px auto",
              position: "relative",
              border: "3px solid #000"
            }}
          >
            <video
              className="my-video"
              ref={ref => {
                this.myVideo = ref;
              }}
              style={{
                width: "130px",
                position: "absolute",
                left: "10px",
                bottom: "10px",
                border: "3px solid #0061ff",
                zIndex: "2"
              }}
            />
            <video
              className="user-video"
              ref={ref => {
                this.userVideo = ref;
              }}
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                bottom: "0",
                top: "0",
                width: "100%",
                height: "100%",
                zIndex: "1"
              }}
            />
            {/*TODO: Who are you connected with?*/}
          </div>
          <Message
            success
            header="You are connected to"
            content={this.state.memberId}
          />
          {/* <VideoChat /> */}
        </Layout>
      </div>
    );
  }
}

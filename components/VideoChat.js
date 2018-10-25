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
import { Router } from "../routes";

let xsrfToken = "";
let pusher;
let channelName;

export default class VideoChat extends Component {
  constructor() {
    super();

    this.state = {
      hasMedia: false,
      userName: "",
      otherUserId: null,
      connectedTo: ""
    };

    this.currentUser = {
      id: "",
      stream: undefined
    };

    this.peers = [];

    this.mediaHandler = new MediaHandler();
    // this.setupPusher();

    this.callTo = this.callTo.bind(this);
    this.setupPusher = this.setupPusher.bind(this);
    this.startPeer = this.startPeer.bind(this);
  }

  async componentWillMount() {
    try {
      const response = await axios.post(
        window.location.origin + "/videochat/stream",
        { timeout: 60 * 4 * 1000 }
      );
      this.setState({ userName: response.data.currentUser });
      this.currentUser.id = this.state.userName;
      xsrfToken = response.data.token;
    } catch (e) {
      console.log(e);
    }

    // this.currentUser.id = getCurrentUser();

    console.log(this.currentUser.id);

    this.mediaHandler.getPermissions().then(stream => {
      this.setState({ hasMedia: true });
      this.currentUser.stream = stream;
      console.log(stream);
      try {
        let myVideo = document.getElementById("my-video");
        myVideo.srcObject = stream;
        const playPromise = myVideo.play();

        if (playPromise !== null) {
          playPromise
            .then(() => {
              return myVideo.play();
            })
            .catch(e => {
              console.log(e);
            });
        }
      } catch (e) {
        console.log(e.stack);
      }
    });

    this.setupPusher();
    return;
  }

  async setupPusher() {
    Pusher.logToConsole = true;
    pusher = new Pusher(APP_KEY, {
      authEndpoint: "/pusher/auth",
      cluster: "eu",
      auth: {
        params: this.currentUser.id,
        headers: {
          "X-XSRF-Token": xsrfToken
        }
      }
    });

    channelName = pusher.subscribe("presence-video-channel"); //requires auth

    channelName.bind("pusher:subscription_succeeded", () => {
      console.log(channelName.members);
    });

    channelName.bind("pusher:member_added", member => {
      this.setState({ connectedTo: member.id });
      console.log(member.id);
    });
    await channelName.bind(`client-signal-${this.currentUser.id}`, signal => {
      let peer = this.peers[signal.userId];
      // if peer does not already exist, we got an incoming call
      if (peer === undefined) {
        this.setState({ otherUserId: signal.userId });
        peer = this.startPeer(signal.userId, false);

        //callee //if offer is sent, stop!
      }
      // setTimeout(function() {
      peer.signal(signal.data);
      console.log("fuckfuckfuck");
      // }, 5000);
    });
    return;
  }

  startPeer(userId, initiator = true) {
    //caller
    //TODO: initiator is always user!
    const peer = new Peer({
      initiator,
      stream: this.currentUser.stream,
      trickle: false
    });
    console.log("creating new peer");
    console.log(peer);
    console.log(initiator);

    peer.on("signal", data => {
      //initiator
      channelName.trigger(`client-signal-${userId}`, {
        type: "signal",
        userId: this.currentUser.id, //send event to callee from caller, caller receives event
        data: data,
        renegotiate: false,
      });
      console.log("sending offer"); //callee: sends offer instead of answer!!!
      console.log(data);
    });

    peer.on("stream", stream => {
      try {
        let userVideo = document.getElementById("user-video");
        userVideo.srcObject = stream;
        console.log("users mediastream");
        console.log(stream);
        const playPromise = userVideo.play();

        if (playPromise !== null) {
          playPromise
            .then(() => {
              return userVideo.play();
            })
            .catch(e => {
              console.log(e);
            });
        }
      } catch (e) {
        console.log(e.stack);
      }
    });

    peer.on("close", function() {
      let peer = this.peers[userId];
      if (peer) {
        peer.destroy();
      }
      this.peers[UserId] = undefined;
    });
    return peer;
  }

  callTo(userId) {
    console.log(`starting Pusher: ${userId}`);
    this.peers[userId] = this.startPeer(userId);
  }

  endCall() {
    channelName.unbind();
    this.setState({ hasMedia: false });
    pusher.disconnect;
    Router.push("/login");
  }

  render() {
    return (
      <div>
        <Layout>
          <Header as="h1" style={{ textAlign: "center", marginTop: "30px" }}>
            Video Chat
          </Header>
          {["Sebster", "sdfg", "Admin", "qwsdfg"].map(userId => {
            return this.currentUser.id !== userId ? (
              <button key={userId} onClick={() => this.callTo(userId)}>
                Call {userId}
              </button>
            ) : null;
          })}
          <button onClick={this.endCall.bind(this)}>end call</button>

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
              id="my-video"
              // ref={ref => {
              //   this.myVideo = ref;
              // }}
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
              id="user-video"
              // ref={ref => {
              //   this.userVideo = ref;
              // }}
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
            content={this.state.connectedTo}
          />
        </Layout>
      </div>
    );
  }
}

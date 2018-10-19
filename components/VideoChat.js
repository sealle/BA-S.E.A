import React, { Component } from "react";
import MediaHandler from "../webrtc/MediaHandler";
import Pusher from "pusher-js";
import Peer from "simple-peer";

const APP_KEY = "0f924dcd44dc93a88aa7"; //Pusher Key
import { Header, Message } from "semantic-ui-react";
import Layout from "../components/Layout";
import { getCookie } from "../utils/CookieUtils";
import jwtDecode from "jwt-decode";
import getCurrentUser from "../utils/UserUtils";
import axios from "axios";

export default class VideoChat extends Component {
  constructor() {
    super();
    this.state = {
      hasMedia: false,
      otherUserName: "",
      xsrf: "",
      currentUser: "",
      memberId: ""
    };

    let user = {
      name: userName
    };
    this.xsrftoken = this.state.xsrf;

    this.user = user;
    this.user.stream = null;
    this.peers = {};
    let userName = this.state.currentUser;

    this.mediaHandler = new MediaHandler();
    this.setupPusher();

    this.callTo = this.callTo.bind(this);
    this.setupPusher = this.setupPusher.bind(this);
    this.startPeer = this.startPeer.bind(this);
  }

  componentDidMount() {
    const response = axios.post(window.location.origin + "/currentuser");
    this.setState({
      currentUser: response.data.currentUser,
      xsrf: response.data.token
    });

    console.log(this.xsrfToken);

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
        params: this.user.name,
        headers: {
          "X-XSRF-Token": this.xsrfToken
        }
      }
    });

    this.channel = this.pusher.subscribe("presence-video-channel"); //presence: requires auth!

    this.channel.bind(`client-signal-${this.user.name}`, signal => {
      let peer = this.peers[signal.userName];

      // this.setState({ memberId: this.channel.member });
      // console.log(this.state.memberId); //who am i connected with (receiver side)

      // if peer does not already exist, we got an incoming call
      if (peer === undefined) {
        this.setState({ otherUserName: signal.userName });
        peer = this.startPeer(signal.userName, false);
      }

      peer.signal(signal.data);
    });
  }

  startPeer(userName, initiator = true, wrtc) {
    //TODO: initiator is always user!
    const peer = new Peer({
      initiator,
      stream: this.user.stream,
      trickle: false,
      wrtc: wrtc
    });

    peer.on("signal", data => {
      this.channel.trigger(`client-signal-${userName}`, {
        type: "signal",
        userName: this.user.name,
        data: data
      });
    });

    peer.on("stream", stream => {
      /*try {
        this.myVideo.srcObject = stream; //bug -> why is the stream reloading?
      } catch (e) {
        this.myVideo.src = URL.createObjectURL(stream);
        console.log(e);
      }

      this.myVideo.play();
    });*/

      this.userVideo.srcObject = stream; //bug -> why is the stream reloading?
      const playPromise = this.userVideo.play();

      if (playPromise !== null) {
        playPromise.catch(() => {
          this.userVideo.play();
        });
      }
    });

    peer.on("close", () => {
      let peer = this.peers[userName];
      if (peer !== undefined) {
        peer.destroy(err);
      }

      this.peers[userName] = undefined;
    });
    return peer;
  }

  callTo(userName) {
    this.peers[userName] = this.startPeer(userName);
  }

  render() {
    return (
      <div>
        <Layout>
          <Header as="h1" style={{ textAlign: "center", marginTop: "30px" }}>
            Video Chat
          </Header>
          {["Sebster"].map(userName => {
            return this.user.name !== userName ? (
              <button key={userName} onClick={() => this.callTo(userName)}>
                Call {userName}
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
        </Layout>
      </div>
    );
  }
}

import React, { Component } from "react";
import MediaHandler from "../webrtc/MediaHandler";
import Pusher from "pusher-js";
import Peer from "simple-peer";

const APP_KEY = "0f924dcd44dc93a88aa7";
const wrtc = require("wrtc");
import getCurrentUser from "../utils/UserUtils";
import { getCookie } from "../utils/CookieUtils";
import jwtDecode from "jwt-decode";

export default class VideoChat extends Component {
  constructor() {
    super();

    this.state = {
      hasMedia: false,
      otherUserName: ""
    };

    const token = getCookie("x-access-token");
    const decoded = jwtDecode(token);

    let userName = getCurrentUser();

    window.user = {
      name: userName
    };
    window.xsrftoken = decoded.xsrftoken;

    this.user = window.user;
    this.user.stream = null;
    this.peers = {};

    this.mediaHandler = new MediaHandler();
    this.setupPusher();

    this.callTo = this.callTo.bind(this);
    this.setupPusher = this.setupPusher.bind(this);
    this.startPeer = this.startPeer.bind(this);
  }

  componentWillMount() {
    this.mediaHandler.getPermissions().then(stream => {
      this.setState({ hasMedia: true });
      this.user.stream = stream;

      try {
        this.myVideo.srcObject = stream;
      } catch {
        this.myVideo.src = URL.createObjectURL(stream);
      }

      this.myVideo.play();
    });
  }

  setupPusher() {
    //TODO: Pusher only one way: User->Admin
    //Pusher.logToConsole = true;
    this.pusher = new Pusher(APP_KEY, {
      authEndpoint: "/pusher/auth",
      cluster: "eu",
      auth: {
        params: this.user.name,
        headers: {
          "X-XSRF-Token": window.xsrfToken
        }
      }
    });

    this.channel = this.pusher.subscribe("presence-video-channel"); //presence: requires auth!

    this.channel.bind(`client-signal-${this.user.name}`, signal => {
      let peer = this.peers[signal.userName];

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
      <div className="VideoChat" style={{ textAlign: "center" }}>
        <h1>VideoChat</h1>
        {["Admin"].map(userName => {
          return this.user.name !== userName ? (
            <button key={userName} onClick={() => this.callTo(userName)}>
              Call {userName}
            </button>
          ) : null;
        })}

        <div
          className="video-container"
          style={{
            width: "500px",
            height: "380px",
            margin: "0px auto",
            position: "relative",
            border: "6px solid #645cff"
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
              border: "6px solid #2196F3",
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
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import MediaHandler from "../webrtc/MediaHandler";
import Pusher from "pusher-js";
import Peer from "simple-peer";
const APP_KEY = "0f924dcd44dc93a88aa7"; //Pusher Key
import {
  Header,
  Message,
  Segment,
  Button,
  Icon,
  Form
} from "semantic-ui-react";
import { getCookie } from "../utils/CookieUtils";
import jwtDecode from "jwt-decode";
import getCurrentUser from "../utils/UserUtils";
import axios from "axios";
import { Router } from "../routes";
import swal from "sweetalert2";

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
      connectedTo: "",
      role: "",
      isNotCalled: "true",
      hash: "",
      message: "",
      waitingMessage: "",
      loading: false,
      countMembers: ""
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
    this.endCall = this.endCall.bind(this);
  }

  async componentWillMount() {
    try {
      const response = await axios.post(
        window.location.origin + "/videochat/stream",
        { timeout: 60 * 4 * 1000 }
      );
      this.setState({
        userName: response.data.currentUser,
        role: response.data.role
      });
      this.currentUser.id = this.state.userName;
      xsrfToken = response.data.token;
    } catch (e) {
      console.log(e);
    }

    // this.currentUser.id = getCurrentUser();

    this.mediaHandler.getPermissions().then(stream => {
      this.setState({ hasMedia: true });
      this.currentUser.stream = stream;
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

  setupPusher() {
    //Pusher.logToConsole = true;
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

    channelName.bind("pusher:subscription_succeeded", members => {
      let countMembers = members.count;
      console.log(countMembers);
    });

    channelName.bind("pusher:member_added", member => {
      this.setState({ connectedTo: member.id });
      swal("You are conneted to", `${member.id}`, "success");
      // let newConnect = member.id;
      // // swal("Attention", "Admin is occupied, please wait...", "warning");
      // axios.post(window.location.origin + "/pusher/count", {
      //   newConnect
      // });
    });

    channelName.bind("pusher:member_removed", member => {
      swal("Removed member", `${member.id}`, "success");
    });

    channelName.bind(`client-signal-${this.currentUser.id}`, signal => {
      let peer = this.peers[signal.userId];
      // if peer does not already exist, we got an incoming call
      if (peer === undefined) {
        // this.setState({ otherUserId: signal.userId });
        peer = this.startPeer(signal.userId, false);

        //callee //if offer is sent, stop!
      }
      peer.signal(signal.data);
    });
  }

  startPeer(userId, initiator = true) {
    //caller
    //TODO: initiator is always user!
    const peer = new Peer({
      initiator,
      stream: this.currentUser.stream,
      trickle: false
    });

    peer.on("signal", data => {
      channelName.trigger(`client-signal-${userId}`, {
        type: "signal",
        userId: this.currentUser.id, 
        data: data,
      });
    });

    peer.on("stream", stream => {
      try {
        let userVideo = document.getElementById("user-video");
        userVideo.srcObject = stream;
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
    return peer;
  }

  callTo(userId) {
    // console.log(`starting Pusher: ${userId}`);
    this.setState({ isNotCalled: false });
    //TODO: show encall button only when in call?
    this.peers[userId] = this.startPeer(userId);
  }

  endCall() {
    window.location.href = "/login";
    Router.push("/login");
  }

  reloadAfterCall() {
    window.location.href = "/admin";
  }

  render() {
    return (
      <div>
        <Layout>
          <style>{`
        body {
          background: #e6e6e6;
        }
      `}</style>
          <Segment
            style={{ marginTop: "50px", marginLeft: "-126px", width: "900px" }}
          >
            <Header
              as="h1"
              textAlign="center"
              style={{ color: "#2985d0", marginTop: "10px" }}
            >
              Video Chat
            </Header>
            {/* TODO: <UserApproval /> if role == 1 */}
            <br />
            <div
              className="video-container"
              style={{
                width: "60%",
                height: "380px",
                margin: "0px auto",
                position: "relative",
                border: "3px solid #000"
              }}
            >
              {["Admin"].map(userId => {
                return this.currentUser.id !== userId &&
                  this.state.isNotCalled ? (
                  <Button
                    icon
                    key={userId}
                    onClick={() => this.callTo(userId)}
                    style={{
                      backgroundColor: "#2985d0",
                      color: "white",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: "3",
                      margin: "auto"
                    }}
                  >
                    Call {userId}
                    <Icon name="phone" />
                  </Button>
                ) : null;
              })}
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
                  // position: "absolute",
                  margin: "auto",
                  // left: "0",
                  // right: "0",
                  // bottom: "0",
                  // top: "0",
                  width: "100%",
                  height: "100%",
                  zIndex: "1"
                }}
              />
              {/*TODO: Who are you connected with?*/}
            </div>
            <br />
            {this.state.role == 1 ? (
              <Button
                onClick={this.reloadAfterCall}
                fluid
                style={{ color: "white", backgroundColor: "#ff3344" }}
              >
                end call
              </Button>
            ) : (
              <Button
                onClick={this.endCall}
                fluid
                style={{ color: "white", backgroundColor: "#ff3344" }}
              >
                end call
              </Button>
            )}
            {this.state.role == 1 ? (
              <Message
                success
                header="You are connected to"
                content={this.state.connectedTo}
              />
            ) : null}
          </Segment>
        </Layout>
      </div>
    );
  }
}

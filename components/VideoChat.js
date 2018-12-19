import React, { Component } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import MediaHandler from "../webrtc/MediaHandler";
import Pusher from "pusher-js";
import Peer from "simple-peer";
const APP_KEY = "0f924dcd44dc93a88aa7"; //Pusher Key
import { setCookie } from "../utils/CookieUtils";
import web3 from "../ethereum/src/web3";
import OtpInput from "react-otp-input";
import {
  Header,
  Message,
  Segment,
  Button,
  Icon,
  Form,
  Modal,
  Input,
  Container
} from "semantic-ui-react";
import axios from "axios";
import { Router } from "../routes";
import swal from "sweetalert2";

let xsrfToken = "";
let pusher;
let channelName;
let userName;

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
      countMembers: "",
      open: false
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
    this.approval = this.approval.bind(this);
    this.show = this.show.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
      userName = member.id;
      // let newConnect = member.id;
      // // swal("Attention", "Admin is occupied, please wait...", "warning");
      // axios.post(window.location.origin + "/pusher/count", {
      //   newConnect
      // });
    });

    channelName.bind("pusher:member_removed", member => {
      this.show();
      // swal("Removed `${member.id}`", "Please press End Call to approve or decline the user" , "success");
      //reload admin page?
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
        data: data
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

  endCall = async () => {
    let otp = this.state.otp;
    console.log(otp);
    let response = await axios.post(window.location.origin + "/otpVerify", {
      otp
    });
    if (response.data.success) {
      setCookie("x-access-token", "", -60 * 60);
      window.location.href = "/login";
      Router.push("/login");
    } else {
      this.setState({ message: response.data.message, isEntered: false });
    }
  };

  async approval() {
    let newAccount = web3.eth.accounts.create();
    let newKycKey = newAccount.address;
    let response = await axios.post(window.location.origin + "/approval", {
      newKycKey,
      userName
    });
    if (response.data.success) {
      this.closeModal();
    } else {
      console.log("error");
    }
    window.location.href = "/admin";
  }

  show(dimmer) {
    this.setState({ dimmer, open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  render() {
    const { open, dimmer } = this.state;
    return (
      <div>
        <Layout>
          <style>{`
        body {
          background: #e6e6e6;
        }
      `}</style>
          <Segment style={{ marginLeft: "-126px", width: "900px" }}>
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
            {this.state.role != 1 ? (
              <div>
                {/* <div style={{textAlign: "center"}}>
                  <OtpInput
                    onChange={otp => console.log(otp)}
                    numInputs={6}
                    separator={<span>-</span>}
                  />
                </div> */}
                <Container style={{ width: "50%", marginBottom: "13px" }}>
                  <OtpInput
                    value={this.state.otp}
                    onChange={otp => this.setState({otp: otp, otpEntered: true})}
                    // onChange={otp => console.log(otp)}
                    numInputs={6}
                    separator={<span>-</span>}
                  />
                  {this.state.message ?
                  <Message error header="Oops!" content={this.state.message} />
                  :null }
                </Container>
                {this.state.otpEntered ? (
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#ff3344",
                      width: "50%",
                      margin: "0px auto"
                    }}
                    fluid
                    onClick={this.endCall}
                  >
                    Submit
                  </Button>
                ) : null }
              </div>
            ) : null}
            {this.state.role == 1 && this.state.connectedTo ? (
              <Message
                success
                header="You are connected to"
                content={this.state.connectedTo}
              />
            ) : null}
          </Segment>
          <Modal dimmer={dimmer} open={open} onClose={this.closeModal}>
            <Modal.Header>{userName} removed successfully!</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Header>Approval</Header>
                <p>
                  Please select whether the user identification was successful.
                  If yes, he will be assigned a kycKey, if no, the user will be
                  deleted.
                </p>
                <p>Will you approve?</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color="black" floated="left" onClick={this.closeModal}>
                Decline
              </Button>
              <Button
                positive
                icon="checkmark"
                labelPosition="right"
                content="Approve"
                onClick={this.approval}
              />
            </Modal.Actions>
          </Modal>
        </Layout>
      </div>
    );
  }
}

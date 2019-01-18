import React, { Component } from "react";
import MediaHandler from "../webrtc/MediaHandler";
import Pusher from "pusher-js";
import Peer from "simple-peer";
const APP_KEY = "0f924dcd44dc93a88aa7"; //Pusher Key
import { setCookie } from "../utils/CookieUtils";
import OtpInput from "react-otp-input";
import RecordRTC from "recordrtc";
const StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
import web3 from "../ethereum/src/web3";
import contract from "../ethereum/src/contract";
import {
  Message,
  Segment,
  Button,
  Container,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import axios from "axios";
import { Router } from "../routes";
import swal from "sweetalert2";
let xsrfToken = "";
let pusher;
let peer;
let channelName;
let userName;
let userNames = [];
let recordRTC;
let firstMember;

//User's videochat
export default class VideoChat extends Component {
  constructor() {
    super();
    this.state = {
      hasMedia: false,
      userName: "",
      message: "",
      isConnected: false,
      disableButton: true,
      isRecording: "",
    };

    this.currentUser = {
      id: "",
      stream: undefined
    };

    this.peers = [];

    this.mediaHandler = new MediaHandler();
  }

  async componentWillMount() {
    //request user data from server
    try {
      const response = await axios.post(
        window.location.origin + "/videochat/stream"
      );
      this.setState({
        userName: response.data.currentUser,
      });
      this.currentUser.id = this.state.userName;
      xsrfToken = response.data.token;
    } catch (e) {
      console.log(e);
    }

    //ask for permission to allow microphone and webcam
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
    return
  }

  //setting up pusher API
  setupPusher = () => {
    //log pusher to console
    //Pusher.logToConsole = true;

    //create new Pusher
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

    //create new presence-channel
    channelName = pusher.subscribe("presence-video-channel"); //requires auth

    //get members in channel
    channelName.bind("pusher:subscription_succeeded", members => {
      //get id of Admin from the object
      firstMember = Object.keys(members.members)[0];
    });

    //listener for added members to the channel
    channelName.bind("pusher:member_added", member => {
      console.log("connected to" + member.id)
      // swal("You are conneted to", `${member.id}`, "success"); //Only Admin!!
      if (userNames.includes(member.id) === false) {
        userNames.push(member.id);
      }
      console.log(userNames);
    });

    //listener for added members to the channel
    channelName.bind("pusher:member_removed", member => {
      console.log(userName);
      let i = userNames.indexOf(userName);
      userNames.splice(i, 1);
      console.log(userNames);
      this.setState({
        img1: !this.state.img1,
        showMrzValidationButton: !this.state.showMrzValidationButton,
        disableButton: true
      });
    });

    //bind client signal to channel
    //this is executed when the event is triggered
    channelName.bind(`client-signal-${this.currentUser.id}`, signal => {
      let peer = this.peers[signal.userId];
      // if peer does not already exist, we got an incoming call
      if (peer === undefined) {
        //start peer where initiator = false
        peer = this.startPeer(signal.userId, false);
        this.setState({ isConnected: true });
      }
      peer.signal(signal.data);
    });

    channelName.bind(`client-message-${this.currentUser.id}`, message => {
      setCookie("x-access-token", "", -60 * 60);
      window.location.href = "/login";
      Router.push("/login");
    });

    channelName.bind(`client-approval-${this.currentUser.id}`, message => {
      swal({
        title: "Success!",
        text: "The user has entered the correct OTP",
        type: "success",
        confirmButtonText: "Confirm",
        onClose: () => {
          //Stop audio recording and send .wav file to server
          recordRTC.stopRecording(async () => {
            let formData = new FormData();
            let recordedBlob = recordRTC.getBlob();
            console.log(recordedBlob);
            let fileName = `${userName}.wav`;
            let file = new File([recordedBlob], fileName, {
              mimeType: "audio/wav"
            });
            console.log(file);
            formData.append("fileName", fileName);
            formData.append("file", file);
            formData.append("userName", userName);
            this.setState({ isRecording: "" });
            let response = await axios.post(
              window.location.origin + "/approval",
              formData
            );
            if (response.data.success) {
              let accounts = await web3.eth.getAccounts();
              let fname = response.data.fname;
              let lname = response.data.lname;
              let idNum = response.data.idNum;
              let kycKey = response.data.kycKey;
              console.log(fname, lname, idNum, kycKey);
              let hash = web3.utils.soliditySha3(
                `${fname} ${lname} ${idNum} ${kycKey}`
              );
              contract.methods.storeHash(hash).send({
                from: accounts[0]
              });
            } else {
              console.log("error");
            }
          });
        }
      });
    });
  };

  //connect to peer
  startPeer = (userId, initiator = true) => {
    //create new Peer
    peer = new Peer({
      initiator,
      stream: this.currentUser.stream,
      trickle: false
    });

    //log simple-peer to console
    // peer._debug = console.log

    //sends offer signal to peer
    //connection established when peer sends answer
    peer.on("signal", data => {
      channelName.trigger(`client-signal-${userId}`, {
        type: "signal",
        userId: this.currentUser.id,
        data: data
      });
    });

    //when the connection is established get the peer's audio/video stream
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
        //start recording the audio line
        recordRTC = RecordRTC(stream, {
          //TODO: Which stream is beeing recorded? How to record both streams?
          recorderType: StereoAudioRecorder,
          mimeType: "audio/wav"
        });
        recordRTC.startRecording();
        this.setState({ isRecording: "Recording..." });
      } catch (e) {
        console.log(e.stack);
      }
    });

    return peer;
  };

  //verify the entered otp
  otpVerify = async () => {
    //get otpToken from server
    let res = await axios.post(window.location.origin + "/otpToken");
    if (res.data.success) {
      let otpToken = res.data.otpToken;
      //check whether otpToken is the same as the entered otp
      console.log(this.state.otp);
      console.log(otpToken);
      if (otpToken === this.state.otp) {
        //trigger client event to Admin
        await channelName.trigger(`client-approval-${firstMember}`, {
          message: "User entered correct OTP"
        });
        //destroy P2P connection
        peer.destroy();
        setCookie("x-access-token", "", -60 * 60);
        window.location.href = "/login";
        Router.push("/login");
      } else {
        this.setState({ message: "wrong OTP!" });
      }
    }
  };

  render() {
    return (
      <div>
        <style>{`
        body {
          background: #e6e6e6;
        }
      `}</style>
          <div>
            {this.state.isConnected === false ? (
              <Dimmer active>
                <Loader indeterminate>Waiting for Admin</Loader>
              </Dimmer>
            ) : null}
            <Segment style={{ marginTop: "50px" }}>
              <Container
                className="video-container"
                style={{
                  width: "500px",
                  height: "376px",
                  margin: "0px auto",
                  border: "2px solid black",
                  position: "relative"
                }}
              >
                <video
                  className="my-video"
                  id="my-video"
                  style={{
                    width: "130px",
                    position: "absolute",
                    left: "10px",
                    bottom: "10px",
                    border: "2px solid #0061ff",
                    zIndex: "2"
                  }}
                />
                <video
                  className="user-video"
                  id="user-video"
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
              </Container>
              <br />
              <Container style={{ width: "71%", marginBottom: "13px" }}>
                <OtpInput
                  style={{ margin: "auto", width: "70%" }}
                  value={this.state.otp}
                  onChange={otp => {
                    this.setState({ otp: otp, otpEntered: true });
                  }}
                  numInputs={6}
                  separator={<span>-</span>}
                />
                {this.state.message ? (
                  <Message error header="Oops!" content={this.state.message} />
                ) : null}
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
                  onClick={this.otpVerify}
                >
                  Submit
                </Button>
              ) : null}
            </Segment>
          </div>
      </div>
    );
  }
}

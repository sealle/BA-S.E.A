import React, { Component } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import MediaHandler from "../webrtc/MediaHandler";
import Pusher from "pusher-js";
import Peer from "simple-peer";
const APP_KEY = "0f924dcd44dc93a88aa7"; //Pusher Key
import { setCookie } from "../utils/CookieUtils";
import authenticator from "otplib/authenticator";
import OtpInput from "react-otp-input";
import { Tesseract } from "tesseract.ts";
const parse = require("mrz").parse;
import {
  Header,
  Message,
  Segment,
  Button,
  Icon,
  Container,
  Grid,
  Dimmer,
  Loader
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
let token = "";
authenticator.options = { step: 60 };

export default class VideoChat extends Component {
  constructor() {
    super();

    this.state = {
      hasMedia: false,
      userName: "",
      otherUserId: null,
      // role: "",
      isNotCalled: "true",
      message: "",
      waitingMessage: "",
      loading: false,
      countMembers: "",
      isEdited: "",
      activeItem: "videochat",
      ethAddresses: [],
      ethAddressArray: [],
      message: "",
      sent: false,
      idIsValid: ""
    };

    this.currentUser = {
      id: "",
      stream: undefined
    };

    this.peers = [];

    this.mediaHandler = new MediaHandler();

    this.setupPusher = this.setupPusher.bind(this);
    this.startPeer = this.startPeer.bind(this);
    // this.endCall = this.endCall.bind(this);
    // this.approval = this.approval.bind(this);
    this.show = this.show.bind(this);
    // this.closeModal = this.closeModal.bind(this);
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

    // channelName.bind("pusher:subscription_succeeded", member => {
    // userNames = members.id;
    // channelName.members.each(member => {
    //   userNames = member.id;
    //   // userNames.push(member.id)
    //   console.log(userNames)
    // })
    // console.log(countMembers);
    // });

    channelName.bind("pusher:member_added", member => {
      swal("You are conneted to", `${member.id}`, "success");

      // userName = member.id;

      if (userNames.includes(member.id) === false) {
        userNames.push(member.id);
      }

      console.log(userNames);

      // let newConnect = member.id;
      // // swal("Attention", "Admin is occupied, please wait...", "warning");
      // axios.post(window.location.origin + "/pusher/count", {
      //   newConnect
      // });
    });

    channelName.bind("pusher:member_removed", member => {
      console.log(userName);
      let i = userNames.indexOf(userName);
      userNames.splice(i, 1);
      // this.show();
      console.log(userNames);
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
    peer = new Peer({
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

  callTo = async userId => {
    // console.log(`starting Pusher: ${userId}`);
    this.setState({ isNotCalled: false });
    //TODO: show encall button only when in call?
    this.peers[userId] = this.startPeer(userId);
    let currentUser = userId;
    let response = await axios.post(window.location.origin + "/usrs", {
      currentUser
    });
    if (response.data.success) {
      this.setState({
        img1: response.data.pic1,
        img2: response.data.pic2,
        doc1: response.data.doc1,
        doc2: response.data.doc2
      });
    }
  };

  decline = async () => {
    peer.destroy();
    let response = await axios.post(window.location.origin + "/decline", {
      userName
    });
    if (response.data.success) {
      swal("User declined", "", "success");
      this.setState({ isCalled: false });
    } else {
      console.log("something went wrong!");
    }
  };

  show(dimmer) {
    this.setState({ dimmer, open: true });
  }

  returnHome = () => {
    this.setState({ open: false });
    setCookie("x-access-token", "", -60 * 60);
    window.location.href = "/login";
    Router.push("/login");
  };

  sendOTP = async () => {
    let otpSecret = authenticator.generateSecret();
    console.log(otpSecret);
    token = authenticator.generate(otpSecret);
    console.log(token);
    console.log(userName);
    let isValid = authenticator.check(token, otpSecret);
    console.log(isValid);
    let response = await axios.post(window.location.origin + "/createOTP", {
      userName,
      token,
      otpSecret
    });
    if (response.data.success) {
      swal("OTP sent!", "", "success");
      this.setState({ isCalled: false });
    }
  };

  otpVerify = async () => {
    let res = await axios.post(window.location.origin + "/otpSecret");
    if (res.data.success) {
      let otpSecret = res.data.otpSecret;
      console.log(otpSecret);
      console.log(this.state.otp);
      let isValid = authenticator.check(this.state.otp, otpSecret);
      console.log(isValid);
      if (isValid) {
        let response = await axios.post(window.location.origin + "/approval");
        if (response.data.success) {
          setCookie("x-access-token", "", -60 * 60);
          window.location.href = "/login";
          Router.push("/login");
        } else {
          console.log("oops");
        }
      } else {
        this.setState({ message: "wrong OTP!" });
      }
    }
    peer.destroy();
  };

  ocrScan = () => {
    this.setState({ loadingOCR: true });
    let image = document.getElementById("id-back");
    Tesseract.recognize(image).then((result, err) => {
      if (err) {
        console.log(err);
      }
      let ocrText1 = JSON.stringify(result.text).substring(1, 31);
      let ocrText2 = JSON.stringify(result.text).substring(33, 63);
      let ocrText3 = JSON.stringify(result.text).substring(65, 95);
      let ocrLines = [];
      ocrLines.push(ocrText1, ocrText2, ocrText3);
      let res = parse(ocrLines);
      if (res.valid === true) {
        this.setState({ idIsValid: true });
      } else {
        this.setState({ idIsValid: false });
      }
      this.setState({ loadingOCR: false, ocr: result.text, isCalled: true });
    });
  };

  //TODO: Crop Function!!

  // show(dimmer) {
  //   this.setState({ dimmer, open: true });
  // }
  // closeModal() {
  //   this.setState({ open: false });
  // }

  render() {
    return (
      <div>
        {/* <Layout> */}
        <style>{`
        body {
          background: #e6e6e6;
        }
      `}</style>
        {this.state.role == 1 ? (
          <Segment style={{ marginTop: "16px", width: "100%" }}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Container
                    className="video-container"
                    style={{
                      width: "500px",
                      height: "380px",
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
                  <Container style={{width:"62%"}}>
                  <Button
                      animated
                      floated="left"
                      onClick={this.sendOTP}
                      style={{
                        backgroundColor: "white",
                        border: "1px solid black",
                        width: "40%"
                      }}
                    >
                      <Button.Content visible>
                        <Icon name="send" color="green" />
                      </Button.Content>
                      <Button.Content hidden>Send OTP</Button.Content>
                    </Button>
                    <Button
                      animated
                      floated="right"
                      onClick={this.decline}
                      style={{
                        backgroundColor: "white",
                        border: "1px solid black",
                        width: "40%"
                      }}
                    >
                      <Button.Content visible>
                        <Icon name="close" color="red" />
                      </Button.Content>
                      <Button.Content hidden>Quit Call</Button.Content>
                    </Button>
                  </Container>
                </Grid.Column>
                <Grid.Column width="eight">
                  {/* {this.state.isCaptured ? */}
                  {/* {this.state.img1 ? ( */}
                  <div>
                    <Container
                      style={{
                        display: "inline-block",
                        width: "100%",
                        height: "282.5px",
                        marginBottom: "-6%"
                      }}
                    >
                      <img
                        id="id-back"
                        className="img-responsive"
                        // src={`../static/${this.state.img1}`}
                        src={"../static/vbnm-ID.png"}
                        style={{
                          // width: "500px",
                          // height: "282.5px"
                          width: "100%",
                          height: "88%"
                          // float: "left"
                        }}
                      />
                    </Container>
                    {this.state.idIsValid ? (
                      <Message
                        header="Valid!"
                        success
                        content={this.state.ocr}
                        style={{
                          boxShadow: "1px 1px 11px green",
                          border: "1px solid green"
                        }}
                      />
                    ) : this.state.idIsValid === false ? (
                      <Message
                        header="NOT Valid!"
                        success
                        content={this.state.ocr}
                        style={{
                          boxShadow: "1px 1px 11px red",
                          border: "1px solid red"
                        }}
                      />
                    ) : null}
                    {/* ) : null} */}
                    {/* : null } */}
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width="eight">
                  <Container
                    style={{
                      // display: "inline-block",
                      // textAlign: "center",
                      marginTop: "10px",
                      width: "64%",
                      marginBottom: "10px"
                    }}
                  >
                    {userNames.map(userId => {
                      return this.currentUser.id !== userId &&
                        // this.state.isNotCalled ? (
                        userNames != [] ? (
                        <Button
                          key={userId}
                          animated
                          floated="left"
                          key={userId}
                          onClick={() => {
                            this.callTo(userId);
                            userName = userId;
                          }}
                          style={{
                            backgroundColor: "white",
                            border: "1px solid black",
                            width: "32%"
                          }}
                        >
                          {" "}
                          <Button.Content visible>Call {userId}</Button.Content>
                          <Button.Content hidden>
                            <Icon name="phone" color="blue" />
                          </Button.Content>
                        </Button>
                      ) : null;
                    })}
                  </Container>
                </Grid.Column>
                <Grid.Column width="eight">
                  <Container style={{ textAlign: "center" }}>
                    <Button
                      onClick={this.ocrScan}
                      loading={this.state.loadingOCR}
                    >
                      Validate MRZ Code
                    </Button>
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        ) : (
          <div>
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
              {this.state.sent ? (
                <Message
                  success
                  header="Success"
                  content={this.state.message}
                />
              ) : null}
              <br />
              <Container style={{ width: "71%", marginBottom: "13px" }}>
                <OtpInput
                  value={this.state.otp}
                  onChange={otp => {
                    this.setState({ otp: otp, otpEntered: true });
                  }}
                  // onChange={otp => console.log(otp)}
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

              <Button
                id="returnHome"
                style={{
                  color: "white",
                  width: "50%",
                  margin: "0px auto"
                }}
                fluid
                onClick={this.returnHome}
              >
                Submit
              </Button>
            </Segment>
          </div>
        )}
        {/* </Layout> */}
      </div>
    );
  }
}

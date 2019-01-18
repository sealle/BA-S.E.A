import React, { Component } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import MediaHandler from "../webrtc/MediaHandler";
import Pusher from "pusher-js";
import Peer from "simple-peer";
const APP_KEY = "0f924dcd44dc93a88aa7"; //Pusher Key
import { setCookie } from "../utils/CookieUtils";
import { authenticator } from "otplib/otplib-browser";
import OtpInput from "react-otp-input";
import { Tesseract } from "tesseract.ts";
const parse = require("mrz").parse;
import RecordRTC from "recordrtc";
const StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
import Carousel from "nuka-carousel";
import ReactCrop from "react-image-crop";
import "!style-loader!css-loader!react-image-crop/dist/ReactCrop.css";
import web3 from "../ethereum/src/web3";
import contract from "../ethereum/src/contract";
import {
  Header,
  Message,
  Segment,
  Button,
  Icon,
  Container,
  Grid,
  Dimmer,
  Loader,
  Modal
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

export default class VideoChat extends Component {
  constructor() {
    super();
    this.imageCropPreviewCanvasRef = React.createRef();
    this.state = {
      hasMedia: false,
      userName: "",
      otherUserId: null,
      role: 1,
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
      idIsValid: "",
      users: [],
      isConnected: false,
      disableButton: true,
      recordAudio: null,
      isRecording: "",
      crop: {
        aspect: 8 / 1.5
      },
      modalOpen: false
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
        role: response.data.role
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
    return;
  }

  //setting up pusher API
  setupPusher = () => {
    // Pusher.logToConsole = true;
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
    //this is executed for the callee when the initiator triggers a call
    channelName.bind(`client-signal-${this.currentUser.id}`, signal => {
      let peer = this.peers[signal.userId];
      // if peer does not already exist, we got an incoming call
      if (peer === undefined) {
        // this.setState({ otherUserId: signal.userId });
        //start peer where initiator = false
        peer = this.startPeer(signal.userId, false);
        this.setState({ isConnected: true });
        //callee //if offer is sent, stop!
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

  //triggers the call to peer
  callTo = async userId => {
    this.setState({ isNotCalled: false, disableButton: false });
    this.peers[userId] = this.startPeer(userId);
    let currentUser = userId;
    console.log(userId);
    //get the peer's data
    let response = await axios.post(
      window.location.origin + "/videochat/user",
      {
        currentUser
      }
    );
    if (response.data.success) {
      this.setState({
        users: response.data.userData,
        img1: response.data.img1,
        img2: response.data.img2
      });
    }
  };

  //decline user while video chat
  decline = async () => {
    //destroy P2P connection
    peer.destroy();
    //stop audio recording
    recordRTC.stopRecording(async () => {
      let formData = new FormData();
      let recordedBlob = recordRTC.getBlob();
      console.log(recordedBlob);
      let fileName = `${userName}.wav`;
      //convert recorded blob to a file and send it to the server
      let file = new File([recordedBlob], fileName, { mimeType: "audio/wav" });
      console.log(file);
      formData.append("fileName", fileName);
      formData.append("file", file);
      formData.append("userName", userName);
      this.setState({ isRecording: "" });
      let response = await axios.post(
        window.location.origin + "/decline",
        formData
      );
      if (response.data.success) {
        swal("User declined", "", "success");
        // this.setState({ isCalled: false});
        channelName.trigger(`client-message-${userName}`, {
          message: "You have been declined!"
        });
      } else {
        console.log("something went wrong!");
      }
    });
  };

  // show = dimmer => {
  //   this.setState({ dimmer, open: true });
  // };

  //send OTP to server to be sent via email to the user
  sendOTP = async () => {
    this.setState({ loading: true });
    //genereate a otp secret
    let otpSecret = authenticator.generateSecret();
    console.log(otpSecret);
    //generate otp
    let otpToken = authenticator.generate(otpSecret);
    console.log(otpToken);
    console.log(userName);
    let formData = new FormData();
    formData.append("otpToken", otpToken);
    formData.append("userName", userName);
    let response = await axios.post(
      window.location.origin + "/createOTP",
      formData
    );
    if (response.data.success) {
      swal("OTP sent!", "", "success");
      this.setState({
        // isCalled: false,
        loading: false
      });
    } else {
      console.log("error");
    }
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
    //Check only for otp and then trigger client event to ADMIN!
  };

  //scan the mrz code and verify it
  ocrScan = () => {
    this.setState({ loadingOCR: true });
    //get cropped image from canvas
    let image = document.getElementById("mrz-code");
    //use tesseract to read the mrz code
    Tesseract.recognize(image).then((result, err) => {
      if (err) {
        console.log(err);
      }
      let ocrLines = [];
      if (this.state.users[0].idType === "id") {
        //prepare data for identity card mrz verification
        let ocrText1 = JSON.stringify(result.text).substring(1, 31);
        let ocrText2 = JSON.stringify(result.text).substring(33, 63);
        let ocrText3 = JSON.stringify(result.text).substring(65, 95);
        ocrLines.push(ocrText1, ocrText2, ocrText3);
      } else {
        //prepare data for drivers license mrz verification
        let ocrText1 = JSON.stringify(result.text).substring(1, 10);
        let ocrText2 = JSON.stringify(result.text).substring(12, 42);
        let ocrText3 = JSON.stringify(result.text).substring(44, 74);
        ocrLines.push(ocrText1, ocrText2, ocrText3);
      }
      //verify mrz code
      let res = parse(ocrLines);
      if (res.valid === true) {
        this.setState({ idIsValid: true });
      } else {
        this.setState({ idIsValid: false });
      }
      this.setState({
        loadingOCR: false,
        ocr: result.text,
        ocrFormat: res.format
        // isCalled: true
      });
    });
  };

  //handle crop change for first image in carousel
  handleOnCropChange1 = crop => {
    this.setState({ crop: crop });
  };

  //handle image loaded for first image in carousel
  handleImageLoaded1 = image => {
    console.log("image");
  };

  //handle crop complete for first image in carousel
  handleOnCropComplete1 = (crop, pixelCrop) => {
    this.setState({ showMrzValidationButton: true });
    //get canvas, the image and the pixelCrop
    const canvasRef = this.imageCropPreviewCanvasRef.current;
    // let image1 = "static/qwer-DLBack.jpeg";
    let image1 = "static/" + this.state.img1;
    this.cropImage(canvasRef, image1, pixelCrop);
  };

  //handle crop change for second image in carousel
  handleOnCropChange2 = crop => {
    this.setState({ crop: crop });
  };

  //handle image loaded for second image in carousel
  handleImageLoaded2 = image => {
    console.log("image");
  };

  //handle crop complete for second image in carousel
  handleOnCropComplete2 = (crop, pixelCrop) => {
    this.setState({ showMrzValidationButton: true });
    //get canvas, the image and the pixelCrop
    const canvasRef = this.imageCropPreviewCanvasRef.current;
    let image2 = "static/" + this.state.img2;
    this.cropImage(canvasRef, image2, pixelCrop);
  };

  //crop image to canvas
  cropImage = (canvasRef, image64, pixelCrop) => {
    const canvas = canvasRef;
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = image64;
    image.onload = function() {
      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );
    };
  };

  //Set initial Height of Nuka-Carousel to not null
  handleLoadImage = () => {
    this.carouselRef.setDimensions();
  };

  //take snapshot from user-video
  //convert image to Blob and then into a file
  //send file to server
  takeSnapshot = async () => {
    let img = document.getElementById("user-video");
    let canvas = document.getElementById("snapshot");
    let context = canvas.getContext("2d");
    context.drawImage(img, 0, 0, 500, 300);
    canvas.toBlob(async blob => {
      let imageName = `${userName}.png`;
      let image = new File([blob], imageName, {
        mimeType: "image/png"
      });
      let formData = new FormData();
      formData.append("imageName", imageName);
      formData.append("image", image);
      formData.append("userName", userName);
      let response = await axios.post(
        window.location.origin + "/storeSnapshot",
        formData
      );
      if (response.data.success) {
        console.log("success");
      } else {
        console.log("error");
      }
    });
  };

  render() {
    return (
      <div>
        <style>{`
        body {
          background: #e6e6e6;
        }
      `}</style>
        {this.state.role == 1 ? (
          <div>
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
                    <Container style={{ width: "500px", margin: "0px auto" }}>
                      {this.state.disableButton === false ? (
                        <div>
                          <Button
                            animated
                            floated="left"
                            onClick={this.takeSnapshot}
                            style={{
                              backgroundColor: "white",
                              border: "1px solid black",
                              width: "32%"
                            }}
                          >
                            <Button.Content visible>
                              <Icon name="camera" />
                            </Button.Content>
                            <Button.Content hidden>Snapshot</Button.Content>
                          </Button>
                          <Button
                            animated
                            loading={this.state.loading}
                            floated="left"
                            onClick={this.sendOTP}
                            style={{
                              backgroundColor: "white",
                              border: "1px solid black",
                              width: "32.5%"
                            }}
                          >
                            <Button.Content visible>
                              <Icon name="send" color="green" />
                            </Button.Content>
                            <Button.Content hidden>Send OTP</Button.Content>
                          </Button>
                          <Button
                            animated
                            floated="left"
                            onClick={this.decline}
                            style={{
                              backgroundColor: "white",
                              border: "1px solid black",
                              width: "32.5%"
                            }}
                          >
                            <Button.Content visible>
                              <Icon name="close" color="red" />
                            </Button.Content>
                            <Button.Content hidden>Quit Call</Button.Content>
                          </Button>
                          <span>{this.state.isRecording}</span>
                        </div>
                      ) : (
                        <div>
                          <Button
                            animated
                            floated="left"
                            onClick={this.takeSnapshot}
                            style={{
                              backgroundColor: "white",
                              border: "1px solid black",
                              width: "32.5%"
                            }}
                            disabled
                          >
                            <Button.Content visible>
                              <Icon name="camera" />
                            </Button.Content>
                            <Button.Content hidden>Snapshot</Button.Content>
                          </Button>
                          <Button
                            animated
                            floated="left"
                            onClick={this.sendOTP}
                            style={{
                              backgroundColor: "white",
                              border: "1px solid black",
                              width: "32.5%"
                            }}
                            disabled
                          >
                            <Button.Content visible>
                              <Icon name="send" color="green" />
                            </Button.Content>
                            <Button.Content hidden>Send OTP</Button.Content>
                          </Button>
                          <Button
                            animated
                            floated="left"
                            onClick={this.decline}
                            style={{
                              backgroundColor: "white",
                              border: "1px solid black",
                              width: "32.5%"
                            }}
                            disabled
                          >
                            <Button.Content visible>
                              <Icon name="close" color="red" />
                            </Button.Content>
                            <Button.Content hidden>Quit Call</Button.Content>
                          </Button>
                          <span>{this.state.isRecording}</span>
                        </div>
                      )}
                    </Container>
                  </Grid.Column>
                  <Grid.Column width="eight">
                    {this.state.img1 ? (
                      <div>
                        <Carousel
                          ref={node => {
                            this.carouselRef = node;
                          }}
                          dragging={false}
                          slidesToShow={1}
                          style={{ maxWidth: "451px", margin: "auto" }}
                          renderBottomCenterControls={false}
                        >
                          <div onLoad={this.handleLoadImage}>
                            <ReactCrop
                              style={{
                                maxWidth: "451px",
                                maxHeight: "287px",
                                margin: "auto"
                              }}
                              src={`../static/${this.state.img1}`}
                              // src={"static/qwer-DLBack.jpeg"}
                              crop={this.state.crop}
                              onChange={this.handleOnCropChange1}
                              onImageLoaded={this.handleImageLoaded1}
                              onComplete={this.handleOnCropComplete1}
                            />
                          </div>
                          <div>
                            <ReactCrop
                              style={{
                                maxWidth: "451px",
                                maxHeight: "287px",
                                margin: "auto"
                              }}
                              src={`../static/${this.state.img2}`}
                              // src={"static/cvbn-IDfront.jpg"}
                              crop={this.state.crop}
                              onChange={this.handleOnCropChange2}
                              onImageLoaded={this.handleImageLoaded2}
                              onComplete={this.handleOnCropComplete2}
                            />
                          </div>
                        </Carousel>
                        {this.state.showMrzValidationButton ? (
                          <Container style={{ textAlign: "center" }}>
                            <Button
                              onClick={this.ocrScan}
                              loading={this.state.loadingOCR}
                            >
                              Validate MRZ Code
                            </Button>
                          </Container>
                        ) : null}
                        <br />
                        <canvas
                          id="mrz-code"
                          ref={this.imageCropPreviewCanvasRef}
                          style={{
                            width: "300%",
                            display: "none"
                          }}
                        />
                        {this.state.idIsValid ? (
                          <Message
                            header={`Valid! Type: ${this.state.ocrFormat}`}
                            success
                            content={this.state.ocr}
                            style={{
                              width: "75%",
                              marginLeft: "12.5%",
                              boxShadow: "1px 1px 11px green",
                              border: "1px solid green"
                            }}
                          />
                        ) : this.state.idIsValid === false ? (
                          <Message
                            header={`Not Valid! Type: ${this.state.ocrFormat}`}
                            success
                            content={this.state.ocr}
                            style={{
                              boxShadow: "1px 1px 11px red",
                              border: "1px solid red"
                            }}
                          />
                        ) : null}
                      </div>
                    ) : null}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width="eight">
                    <Container
                      style={{
                        width: "500px",
                        margin: "0px auto"
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
                              width: "32.5%"
                            }}
                          >
                            {" "}
                            <Button.Content visible>
                              Call {userId}
                            </Button.Content>
                            <Button.Content hidden>
                              <Icon name="phone" color="blue" />
                            </Button.Content>
                          </Button>
                        ) : null;
                      })}
                    </Container>
                    <canvas
                      id="snapshot"
                      width="500"
                      height="300"
                      style={{
                        display: "none"
                      }}
                    />
                  </Grid.Column>
                  <Grid.Column width="eight" />
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
        ) : (
          // User view
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
                  style={{ margin: "auto", width: "70%" }}
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
            </Segment>
          </div>
        )}
        {/* </Layout> */}
      </div>
    );
  }
}

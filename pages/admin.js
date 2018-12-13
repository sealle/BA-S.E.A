import React, { Component } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import {
  Header,
  Container,
  Grid,
  Menu,
  Message,
  Button,
  Icon,
  Segment,
  Card,
  Modal,
  Form
} from "semantic-ui-react";
import axios from "axios";
import Head from "next/head";
import web3 from "../ethereum/src/web3";
import contract from "../ethereum/src/contract";
import swal from "sweetalert2";
import MediaHandler from "../webrtc/MediaHandler";
import Pusher from "pusher-js";
import Peer from "simple-peer";
const APP_KEY = "0f924dcd44dc93a88aa7"; //Pusher Key
let xsrfToken = "";
let pusher;
let channelName;
let userName;

class adminPage extends Component {
  constructor() {
    super();
    this.state = {
      metaMask: true,
      myAddress: "",
      isVideo: true,
      users: [],
      usrs: [],
      isChosen: false,
      isPromoted: false,
      isComp: "",
      inEdit: false,
      isAdmin: false,
      hasMedia: false,
      userName: "",
      otherUserId: null,
      connectedTo: "",
      role: "",
      isNotCalled: "true",
      message: "",
      waitingMessage: "",
      loading: false,
      countMembers: "",
      isEdited: ""
    };
    this.currentUser = {
      id: "",
      stream: undefined
    };

    this.peers = [];

    this.mediaHandler = new MediaHandler();
    // this.setupPusher();
    this.show = this.show.bind(this);
    this.callTo = this.callTo.bind(this);
    this.setupPusher = this.setupPusher.bind(this);
    this.startPeer = this.startPeer.bind(this);
    this.approval = this.approval.bind(this);
    this.makeAdmin = e => this._makeAdmin();
    this.closeModal = this.closeModal.bind(this);
  }

  async componentWillMount() {
    setInterval(async () => {
      web3.eth.getAccounts((err, accounts) => {
        if (err != null) console.error("An error occurred: " + err);
        else if (accounts.length == 0) this.setState({ metaMask: false });
        else this.setState({ metaMask: true, myAddress: accounts[0] });
      });
      try {
        const response = await axios.post(window.location.origin + "/userlist");
        if (response.data.success) {
          this.setState({ users: response.data.userData });
          for (let i = 0; i < this.state.users.length; i++) {
            if (this.state.users[i].edited) {
              this.setState({ isEdited: this.state.users[i].edited });
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, 3000);

    contract.events.KycListen({}, async (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let kycKey = result.returnValues.kycKey;
        let platformAddress = result.returnValues.platformAddress;
        let toAddress = result.returnValues.sender;
        let response = await axios.post(window.location.origin + "/verify", {
          kycKey,
          platformAddress
        });
        try {
          if (response.data.success) {
            contract.methods.answer(response.data.confirmed).send({
              from: this.state.myAddress,
              to: toAddress
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    });

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
      // console.log(countMembers);
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
      this.setState({ connectedTo: "" });
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

  async selectUser(member, e, dimmer) {
    let currentUser = member.username;
    try {
      const response = await axios.post(window.location.origin + "/usrs", {
        currentUser
      });
      if (response.data.success) {
        this.setState({
          usrs: response.data.userData,
          isComp: response.data.isComp,
          img1: response.data.pic1,
          img2: response.data.pic2,
          doc1: response.data.doc1,
          doc2: response.data.doc2
        });
      }
    } catch (error) {
      console.log(error);
    }
    this.setState({ dimmer, open: true, isChosen: true });
  }

  async _makeAdmin() {
    let currentUser = this.state.usrs[0].username;
    try {
      const response = await axios.post(window.location.origin + "/makeadmin", {
        currentUser
      });
      if (response.data.success) {
        this.setState({ successMessage: response.data.message, isAdmin: true });
        console.log(this.state.successMessage);
      }
    } catch (error) {
      console.log(error);
    }
    this.setState({ isPromoted: true });
  }

  async closeModal() {
    let userName = this.state.usrs[0].username;
    console.log(userName);
    let response = await axios.post(window.location.origin + "/changeEdit", {
      userName
    });
    if (response.data.success) {
      this.setState({ open: false });
    }
  }

  toList = () => {
    this.setState({ isVideo: false });
  };

  toVideo = () => {
    this.setState({ isVideo: true });
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
  };

  callTo(userId) {
    this.setState({ isNotCalled: false });
    this.peers[userId] = this.startPeer(userId);
  }

  show(dimmer) {
    this.setState({ dimmer, open: true });
  }

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
    // window.location.href = "/admin";
  }

  render() {
    const { open, dimmer } = this.state;
    return (
      <div>
        <ProfileHeader />
        {/* <Helper/> */}
        {/* <Layout> */}
        {this.state.metaMask == false ? (
          <Message
            error
            content="Please login to Metamask"
            style={{ marginTop: "5px", marginLeft: "120px", width: "900px" }}
          />
        ) : null}
        <Segment style={{ width: "98%", marginLeft: "16px" }}>
          <Header
            as="h1"
            textAlign="center"
            style={{ color: "#2985d0", marginTop: "10px" }}
          >
            Admin Page
          </Header>
          <Menu pointing secondary>
            <Menu.Item
              name="video"
              onClick={this.toVideo}
              style={{ color: "#2985d0" }}
            >
              <Icon name="video" />
              Videochat
            </Menu.Item>
            <Menu.Item
              name="users"
              onClick={this.toList}
              style={{ color: "#2985d0" }}
            >
              <Icon name="users" />
              Userlist
              {this.state.isEdited ? (
                <Icon
                  name="circle thin"
                  size="tiny"
                  color="red"
                  style={{ marginBottom: "10px", marginLeft: "2px" }}
                />
              ) : null}
            </Menu.Item>
          </Menu>
          {this.state.isVideo ? (
            <div>
              <Container
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
                <br />
              </Container>
              <div>
                {this.state.role == 1 && this.state.connectedTo ? (
                  <Message
                    success
                    header="You are connected to"
                    content={this.state.connectedTo}
                  />
                ) : null}
              </div>
              <Modal dimmer={dimmer} open={open} onClose={this.closeModal}>
                <Modal.Header>{userName} removed successfully!</Modal.Header>
                <Modal.Content image>
                  <Modal.Description>
                    <Header>Approval</Header>
                    <p>
                      Please select whether the user identification was
                      successful. If yes, he will be assigned a kycKey, if no,
                      the user will be deleted.
                    </p>
                    <p>Will you approve?</p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    color="black"
                    floated="left"
                    onClick={this.closeModal}
                  >
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
            </div>
          ) : (
            <div>
              {this.state.users.map(member => (
                <Card
                  key={member.id}
                  raised
                  style={{
                    height: "400x",
                    width: "180px",
                    display: "inline-block",
                    margin: "18px"
                  }}
                >
                  <Card.Content>
                    {member.edited ? (
                      <Icon
                        name="circle thin"
                        size="small"
                        color="red"
                        style={{
                          float: "right",
                          marginRight: "-21px",
                          marginTop: "-19px"
                        }}
                      />
                    ) : null}
                    <Card.Header>
                      {member.username}
                      {member.isRegistered == "yes" ? (
                        <Icon
                          name="checkmark"
                          color="green"
                          style={{ float: "right" }}
                        />
                      ) : (
                        <Icon name="x" color="red" style={{ float: "right" }} />
                      )}
                    </Card.Header>
                    <Card.Meta style={{ marginTop: "2px" }}>
                      <span>Last Modified: {member.lastModified}</span>
                    </Card.Meta>
                    <Card.Description>
                      {member.lname}, {member.fname}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra style={{ textAlign: "center" }}>
                    <Button onClick={this.selectUser.bind(this, member)}>
                      View Profile
                    </Button>
                  </Card.Content>
                </Card>
              ))}
              {/* </Container> */}
              {this.state.isChosen ? (
                <Modal dimmer={dimmer} open={open} onClose={this.closeModal}>
                  <Modal.Header>
                    Profile of {this.state.usrs[0].username}
                  </Modal.Header>
                  <Modal.Content image>
                    <Modal.Description>
                      <Header>Approval</Header>
                      {/* Which data has been modified?  */}
                      <Form>
                        {this.state.usrs.map(members => (
                          <div>
                            <Form.Group widths="equal">
                              <Form.Input
                                readOnly
                                fluid
                                label="Username"
                                value={this.state.usrs[0].username}
                              />
                              <Form.Input
                                readOnly
                                fluid
                                label="ID"
                                value={this.state.usrs[0].id}
                              />
                            </Form.Group>
                            <Form.Group widths="equal">
                              <Form.Input
                                readOnly
                                fluid
                                label="First Name"
                                value={this.state.usrs[0].fname}
                              />
                              <Form.Input
                                readOnly
                                fluid
                                label="Last Name"
                                value={this.state.usrs[0].lname}
                              />
                            </Form.Group>
                            {members.edited == "address" ? (
                              <div>
                                <Form.Group>
                                  <Form.Input
                                    error
                                    readOnly
                                    width="eleven"
                                    fluid
                                    label="Street"
                                    value={this.state.usrs[0].street}
                                  />
                                  <Form.Input
                                    error
                                    readOnly
                                    width="five"
                                    fluid
                                    label="House Number"
                                    value={this.state.usrs[0].houseNr}
                                  />
                                </Form.Group>
                                <Form.Group>
                                  <Form.Input
                                    error
                                    readOnly
                                    width="six"
                                    fluid
                                    type="number"
                                    label="Postal Code"
                                    value={this.state.usrs[0].postCode}
                                  />
                                  <Form.Input
                                    error
                                    readOnly
                                    width="ten"
                                    fluid
                                    label="Place of Residence"
                                    value={this.state.usrs[0].placeOfRes}
                                  />
                                </Form.Group>
                              </div>
                            ) : (
                              <div>
                                <Form.Group>
                                  <Form.Input
                                    readOnly
                                    width="eleven"
                                    fluid
                                    label="Street"
                                    value={this.state.usrs[0].street}
                                  />
                                  <Form.Input
                                    readOnly
                                    width="five"
                                    fluid
                                    label="House Number"
                                    value={this.state.usrs[0].houseNr}
                                  />
                                </Form.Group>
                                <Form.Group>
                                  <Form.Input
                                    readOnly
                                    width="six"
                                    fluid
                                    type="number"
                                    label="Postal Code"
                                    value={this.state.usrs[0].postCode}
                                  />
                                  <Form.Input
                                    readOnly
                                    width="ten"
                                    fluid
                                    label="Place of Residence"
                                    value={this.state.usrs[0].placeOfRes}
                                  />
                                </Form.Group>
                              </div>
                            )}
                            <Form.Group widths="equal">
                              <Form.Input
                                readOnly
                                fluid
                                label="Date of Birth"
                                value={this.state.usrs[0].dateOfBirth}
                              />
                              <Form.Input
                                readOnly
                                fluid
                                label="Nationality"
                                value={this.state.usrs[0].nat}
                              />
                            </Form.Group>
                            <Form.Group widths="equal">
                              {members.edited == "email" ? (
                                <Form.Input
                                  error
                                  readOnly
                                  fluid
                                  label="Email"
                                  type="email"
                                  value={this.state.usrs[0].email}
                                />
                              ) : (
                                <Form.Input
                                  readOnly
                                  fluid
                                  label="Email"
                                  type="email"
                                  value={this.state.usrs[0].email}
                                />
                              )}
                              {members.edited == "mobNr" ? (
                                <Form.Input
                                  error
                                  readOnly
                                  fluid
                                  label="Mobile Number"
                                  type="number"
                                  value={this.state.usrs[0].mobNr}
                                />
                              ) : (
                                <Form.Input
                                  readOnly
                                  fluid
                                  label="Mobile Number"
                                  type="number"
                                  value={this.state.usrs[0].mobNr}
                                />
                              )}
                            </Form.Group>
                            <Form.Group width="sixteen">
                              <Form.Input
                                width="sixteen"
                                readOnly
                                fluid
                                label="Registration Date"
                                value={this.state.usrs[0].regDate}
                              />
                            </Form.Group>
                            <Form.Group width="sixteen">
                              <Form.Input
                                width="sixteen"
                                readOnly
                                fluid
                                label="KycKey"
                                value={this.state.usrs[0].kycKey}
                              />
                            </Form.Group>
                            <Form.Group
                              widths="equal"
                              style={{ margin: "0px auto" }}
                            >
                              {/* <Grid width={16}>
                        <Grid.Column> */}
                              <a
                                href={`../static/${this.state.img1}`}
                                target="_blank"
                                style={{ width: "50%" }}
                              >
                                <img
                                  className="img-responsive"
                                  src={`../static/${this.state.img1}`}
                                  style={{
                                    width: "200px",
                                    height: "113px"
                                    // float: "left"
                                  }}
                                />
                              </a>
                              {/* </Grid.Column>
                        <Grid.Column> */}
                              <a
                                href={`../static/${this.state.img1}`}
                                target="_blank"
                              >
                                <img
                                  className="img-responsive"
                                  src={`../static/${this.state.img2}`}
                                  style={{
                                    width: "200px",
                                    height: "113px"
                                    // float: "right"
                                  }}
                                />
                              </a>
                              {/* </Grid.Column> */}
                              {/* </Grid> */}
                            </Form.Group>
                            {this.state.usrs[0].isComp == "1" ? (
                              <div>
                                <Form.Group style={{ marginTop: "10px" }}>
                                  {members.edited == "compName" ? (
                                    <Form.Input
                                      error
                                      readOnly
                                      width="sixteen"
                                      fluid
                                      label="Company Name"
                                      value={this.state.usrs[0].compName}
                                    />
                                  ) : (
                                    <Form.Input
                                      readOnly
                                      width="sixteen"
                                      fluid
                                      label="Company Name"
                                      value={this.state.usrs[0].compName}
                                    />
                                  )}
                                </Form.Group>
                                {members.edited == "compAddress" ? (
                                  <div>
                                    <Form.Group>
                                      <Form.Input
                                        error
                                        readOnly
                                        width="eleven"
                                        fluid
                                        label="Business Address"
                                        value={this.state.usrs[0].businessAd}
                                      />
                                      <Form.Input
                                        error
                                        readOnly
                                        width="five"
                                        fluid
                                        label="House Number"
                                        value={this.state.usrs[0].compHouseNr}
                                      />
                                    </Form.Group>
                                    <Form.Group widths="equal">
                                      <Form.Input
                                        error
                                        readOnly
                                        width="six"
                                        fluid
                                        label="Postal Code"
                                        value={this.state.usrs[0].compPostCode}
                                      />
                                      <Form.Input
                                        error
                                        readOnly
                                        width="ten"
                                        fluid
                                        label="Place of Residenz"
                                        value={this.state.usrs[0].residence}
                                      />
                                    </Form.Group>
                                  </div>
                                ) : (
                                  <div>
                                    <Form.Group>
                                      <Form.Input
                                        readOnly
                                        width="eleven"
                                        fluid
                                        label="Business Address"
                                        value={this.state.usrs[0].businessAd}
                                      />
                                      <Form.Input
                                        readOnly
                                        width="five"
                                        fluid
                                        label="House Number"
                                        value={this.state.usrs[0].compHouseNr}
                                      />
                                    </Form.Group>
                                    <Form.Group widths="equal">
                                      <Form.Input
                                        readOnly
                                        width="six"
                                        fluid
                                        label="Postal Code"
                                        value={this.state.usrs[0].compPostCode}
                                      />
                                      <Form.Input
                                        readOnly
                                        width="ten"
                                        fluid
                                        label="Place of Residenz"
                                        value={this.state.usrs[0].residence}
                                      />
                                    </Form.Group>
                                  </div>
                                )}
                                <Form.Group
                                  width="sixteen"
                                  style={{ margin: "0px auto" }}
                                >
                                  <Icon name="linkify" />
                                  <a
                                    href={`../static/${this.state.doc1}`}
                                    type="application/pdf"
                                    target="_blank"
                                  >
                                    View extract of the relevant registration
                                    authority
                                  </a>
                                </Form.Group>
                                <Form.Group
                                  width="sixteen"
                                  style={{ margin: "0px auto" }}
                                >
                                  <Icon name="linkify" />
                                  <a
                                    href={`../static/${this.state.doc2}`}
                                    type="application/pdf"
                                    target="_blank"
                                  >
                                    View electronic copy of the power of
                                    attorney
                                  </a>
                                </Form.Group>
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </Form>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Container
                      style={{ textAlign: "center", display: "inline-block" }}
                    >
                      <Button
                        color="black"
                        onClick={this.closeModal}
                        loading={this.state.loading}
                      >
                        Close
                      </Button>
                    </Container>
                  </Modal.Actions>
                </Modal>
              ) : null}
            </div>
          )}
          <Container style={{ width: "100%" }}>
            <Head>
              <link
                rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
              />
            </Head>
            <style>{`
        body {
          background: #e6e6e6;
        }
      `}</style>
          </Container>
        </Segment>
        {/* </Layout> */}
      </div>
    );
  }
}

export default adminPage;

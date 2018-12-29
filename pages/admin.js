import React, { Component } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import {
  Header,
  Container,
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
import VideoChat from "../components/VideoChat";
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
      role: "",
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
      sent: false
    };

    this.show = this.show.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // this.closeModalAfterApproval = this.closeModalAfterApproval.bind(this);
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
    }, 1000);

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
        for (let i = 1; i < this.state.usrs.length; i++) {
          this.state.ethAddresses[i] = this.state.usrs[i].ethAddress;
        }
      }
    } catch (error) {
      console.log(error);
    }
    this.setState({ dimmer, open: true, isChosen: true });
  }

  async closeModal() {
    let userName = this.state.usrs[0].username;
    let response = await axios.post(window.location.origin + "/changeEdit", {
      userName
    });
    if (response.data.success) {
      this.setState({ open: false, ethAddresses: [] });
      let a = false;
      for (let i = 0; i < this.state.users.length; i++) {
        if (!this.state.users[i].edited) {
          this.setState({ isEdited: null });
        }
      }
    }
  }

  // async closeModalAfterApproval() {
  //   this.setState({ open: false });
  // }

  toList = () => {
    this.setState({ isVideo: false, activeItem: "users" });
  };

  toVideo = () => {
    this.setState({ isVideo: true, activeItem: "videochat" });
    // this.mediaHandler.getPermissions().then(stream => {
    //   this.setState({ hasMedia: true });
    //   this.currentUser.stream = stream;
    //   try {
    //     let myVideo = document.getElementById("my-video");
    //     myVideo.srcObject = stream;
    //     const playPromise = myVideo.play();

    //     if (playPromise !== null) {
    //       playPromise
    //         .then(() => {
    //           return myVideo.play();
    //         })
    //         .catch(e => {
    //           console.log(e);
    //         });
    //     }
    //   } catch (e) {
    //     console.log(e.stack);
    //   }
    // });
  };

  show(dimmer) {
    this.setState({ dimmer, open: true });
  }

  //is triggered when otp verified!
  // async approval() {
  //   let newAccount = web3.eth.accounts.create();
  //   let newKycKey = newAccount.address;
  //   let response = await axios.post(window.location.origin + "/approval", {
  //     newKycKey,
  //     userName
  //   });
  //   if (response.data.success) {
  //     this.closeModalAfterApproval();
  //   } else {
  //     console.log("error");
  //   }
  //   // window.location.href = "/admin";
  // }

  decline = async () => {
    let response = await axios.post(window.location.origin + "/decline", {
      userName
    });
    if (response.data.success) {
      // this.closeModalAfterApproval();
      console.log("user declined");
      //TODO: Quit VideoCall! How? Component where user is redirected to login?
    } else {
      console.log("error");
    }
    // window.location.href = "/admin";
  };

  // sendOTP = async () => {
  //   let response = await axios.post(window.location.origin + "/otpCreate", {
  //     userName
  //   });
  //   if (response.data.success) {
  //     this.setState({ message: response.data.message, sent: true });
  //   }
  // };

  render() {
    const { open, dimmer, activeItem } = this.state;
    return (
      <div>
        <ProfileHeader />
        {this.state.metaMask == false ? (
          <Message
            error
            content="Please login to Metamask"
            style={{ marginTop: "5px", marginLeft: "120px", width: "900px" }}
          />
        ) : null}
        <Segment style={{ width: "98%", margin: "16px" }}>
          <Header
            as="h1"
            textAlign="center"
            style={{ color: "#2985d0", marginTop: "10px" }}
          >
            Admin Page
          </Header>
          <Menu pointing secondary>
            <Menu.Item
              active={activeItem === "videochat"}
              name="video"
              onClick={this.toVideo}
              style={{ color: "#2985d0" }}
            >
              <Icon name="video" />
              Videochat
            </Menu.Item>
            <Menu.Item
              active={activeItem === "users"}
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
            <VideoChat />
          ) : (
            <div>
              {this.state.users.map(member => (
                <Card
                  key={member.id}
                  raised
                  style={
                    member.kycKey === "declined"
                      ? {
                          height: "400x",
                          width: "180px",
                          display: "inline-block",
                          margin: "18px",
                          border: "1px solid red"
                        }
                      : {
                          height: "400x",
                          width: "180px",
                          display: "inline-block",
                          margin: "18px"
                        }
                  }
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
                      <Form>
                        {/* {this.state.usrs.map(members => ( */}
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
                          {this.state.usrs[0].edited == "address" ? (
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
                            {this.state.usrs[0].edited == "email" ? (
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
                            {this.state.usrs[0].edited == "mobNr" ? (
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
                          {this.state.ethAddresses.length > 0 ? (
                            <p style={{ fontWeight: "bold" }}>
                              EthAddresses which requested the KycKey
                            </p>
                          ) : null}

                          {this.state.ethAddresses.map(ethAddress => (
                            <Form.Group width="sixteen">
                              <Form.Input
                                width="sixteen"
                                readOnly
                                fluid
                                // label={i}
                                value={ethAddress}
                              />
                            </Form.Group>
                          ))}

                          <p style={{ fontWeight: "bold" }}>Identity Card</p>
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
                                {this.state.usrs[0].edited == "compName" ? (
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
                              {this.state.usrs[0].edited == "compAddress" ? (
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
                                  View electronic copy of the power of attorney
                                </a>
                              </Form.Group>
                            </div>
                          ) : null}
                        </div>
                        {/* ))} */}
                      </Form>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Container
                      style={{ textAlign: "center", display: "inline-block" }}
                    >
                      <Button color="black" onClick={this.closeModal}>
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

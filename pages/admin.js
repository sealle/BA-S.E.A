import React, { Component } from "react";
import {
  Header,
  Container,
  Message,
  Segment,
} from "semantic-ui-react";
import axios from "axios";
import Head from "next/head";
import web3 from "../ethereum/src/web3";
import contract from "../ethereum/src/contract";
import dynamic from "next/dynamic";
const Admin = dynamic(import("../components/Admin"), {
  ssr: false
});
const ProfileHeader = dynamic(import("../components/ProfileHeader"), {
  ssr: false
});

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
      sent: false,
      beneficialOwners: []
    };
  }

  async componentWillMount() {
    //check if admin is looged in to metamask
    setInterval(async () => {
      web3.eth.getAccounts((err, accounts) => {
        if (err != null) console.error("An error occurred: " + err);
        else if (accounts.length == 0) this.setState({ metaMask: false });
        else this.setState({ metaMask: true, myAddress: accounts[0] });
      });
      //listen to user data changes from server
    }, 1000);

    //listener for smart contract where user requests come in
    contract.events.KycListen({}, async (err, result) => {
      if (err) {
        console.log(err);
      } else {
        //received data is sent to server to verify kycKey
        let kycKey = result.returnValues.kycKey;
        let platformAddress = result.returnValues.platformAddress;
        let toAddress = result.returnValues.sender;
        let response = await axios.post(window.location.origin + "/verify", {
          kycKey,
          platformAddress
        });
        try {
          //send answer back to requesting address
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

  render() {
    return (
      <div>
        <ProfileHeader />
        {this.state.metaMask == false ? (
          <Message
            error
            content="Please login to Metamask"
            style={{ marginTop: "5px", marginLeft: "16px", width: "98%" }}
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
          <Admin />
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

import React, { Component } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import { Header, Container, Grid, Menu, Message } from "semantic-ui-react";
import axios from "axios";
import Head from "next/head";
import Web3 from "web3";
// const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/b652b579ac1f4420a12407a0a1836b44"));
const web3 = new Web3(Web3.givenProvider || "ws://localhost:3000");

let contractAddress = "0xAE8432705d0F04b2034C459DcC549a66DFCB51d3"; //address of SC
let contractABI = [
  {
    constant: false,
    inputs: [{ name: "confirmed", type: "bool" }],
    name: "answer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "kycAddress",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "payKYC",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "kycKey", type: "string" },
      { name: "platformAddress", type: "address" }
    ],
    name: "transfer",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "kycKey", type: "string" },
      { indexed: false, name: "platformAddress", type: "address" }
    ],
    name: "KycListen",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "confirmed", type: "bool" }],
    name: "PlatformListen",
    type: "event"
  }
];
let contract = new web3.eth.Contract(contractABI, contractAddress);

class adminPage extends Component {
  constructor() {
    super();
    this.state = {
      metaMask: true,
      myAddress: ""
    };
  }

  async componentWillMount() {
    // setInterval(() => {
    //   web3.eth.getAccounts((err, accounts) => {
    //     if (err != null) console.error("An error occurred: " + err);
    //     else if (accounts.length == 0) this.setState({ metaMask: false });
    //     else this.setState({ metaMask: true, myAddress: accounts[0] });
    //   });
    // }, 3000);

    let accounts = await web3.eth.getAccounts();
    let myAddress = accounts[0];
    // let confirmed = true;

    // contract.methods.answer(confirmed).send({
    //   from: myAddress,
    //   to: 0xa9c3f40905a01240f63aa2b27375b5d43dcd64e5
    // });

    contract.events.KycListen({}, async (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        let kycKey = result.returnValues.kycKey;
        let toAddress = result.returnValues.platformAddress;
        console.log(kycKey, toAddress);
        let response = await axios.post(window.location.origin + "/verify", {
          kycKey,
          toAddress
        });
        try {
          if (response.data.success) {
            contract.methods.answer(response.data.confirmed).send({
              from: myAddress,
              to: toAddress
            });
          } else {
            contract.methods.answer(response.data.confirmed).send({
              from: myAddress,
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
        {this.state.metaMask == false ? (
          <Message
            error
            content="Please login to Metamask"
            style={{ marginTop: "5px", marginLeft: "120px", width: "900px" }}
          />
        ) : null}
        <ProfileHeader />
        <Layout>
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
        </Layout>
      </div>
    );
  }
}

export default adminPage;

import React, { Component } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import { Header, Container, Grid, Menu, Message } from "semantic-ui-react";
import axios from "axios";
import Head from "next/head";
import web3 from "../ethereum/src/web3";
import contract from "../ethereum/src/contract";

class adminPage extends Component {
  constructor() {
    super();
    this.state = {
      metaMask: true,
      myAddress: ""
    };
  }

  async componentWillMount() {
    setInterval(() => {
      web3.eth.getAccounts((err, accounts) => {
        if (err != null) console.error("An error occurred: " + err);
        else if (accounts.length == 0) this.setState({ metaMask: false });
        else this.setState({ metaMask: true, myAddress: accounts[0] });
      });
    }, 3000);

    console.log(contract)
    // let accounts = await web3.eth.getAccounts();
    // let myAddress = accounts[0];
    // let confirmed = true;

    // contract.methods.answer(confirmed).send({
    //   from: this.state.myAddress,
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
              from: this.state.myAddress,
              to: toAddress
            });
          } else {
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

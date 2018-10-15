import React, { Component } from "react";
import { Button, Message, Form } from "semantic-ui-react";
import users from "../ethereum/src/users";
import web3 from "../ethereum/src/web3";
import axios from "axios";

export default class Approval extends Component {
  constructor() {
    super();
    this.state = {
      hash: "",
      message: "",
      waitingMessage: "",
      loading: false
    };
  }

  async componentDidMount() {
    const response = await axios.post(window.location.origin + "/hash");
    if (response.data.success) {
      this.setState({ hash: response.data.userHash });
    }

    //Get signal.userName from Server or VideoChat
    //receive Hash from server
  }

  onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    this.setState({
      waitingMessage: "Waiting on transaction success...",
      loading: true
    });

    await users.methods.saveUser().send({
      from: accounts[0],
      value: this.state.hash
    });

    this.setState({
      message: "You have successfully sent the transaction!",
      loading: false
    });
  };
  //Send Hash to Rinkeby

  render() {
    return (
      <div style={{ margin: "auto", width: "650px", marginTop: "15px" }}>
        <Form onSubmit={this.onSubmit} success={this.state.errorMessage}>
          <Button loading={this.state.loading} primary floated="right">
            Approve
          </Button>
          <Button floated="left">Decline</Button>
          <Message success header="Congrats" content={this.state.message} />
        </Form>
      </div>
    );
  }
}

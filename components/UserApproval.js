import React, { Component } from "react";
import { Button, Message, Form } from "semantic-ui-react";
import users from "../ethereum/src/users";
import web3 from "../ethereum/src/web3";
import axios from "axios";
import getCurrentUser from "../utils/UserUtils";

export default class UserApproval extends Component {
  constructor() {
    super();
    this.state = {
      hash: "",
      message: "",
      waitingMessage: "",
      loading: false
    };
  }

  onSubmit = async event => {
    event.preventDefault();

    let currentUser = "blabla"; //TODO: this is always Admin... get connected User!
    const response = await axios.post(window.location.origin + "/hash", {
      currentUser
    });
    console.log(currentUser);
    if (response.data.success) {
      this.setState({ hash: response.data.hash });
      console.log(this.state.hash);
    }

    const accounts = await web3.eth.getAccounts();
    this.setState({
      waitingMessage: "Waiting on transaction success...",
      loading: true
    });

    //Send Hash to Rinkeby
    await users.methods.saveUser().send({
      from: accounts[0],
      value: this.state.hash
    });

    this.setState({
      loading: false
    });
    swal("Congrats", "You have successfully sent the transaction!", "success");
  };

  onDecline = async event => {
    event.preventDefault();

    //TODO: this is always Admin... get connected User (presenceChannel: memberId)
    const response = await axios.post(window.location.origin + "/deleteuser", {
      currentUser
    });
    if (response.data.success) {
      swal("Congrats", "You have successfully deleted the user!", "success");
    }
  };

  render() {
    return (
      <div style={{ margin: "auto", width: "650px", marginTop: "15px" }}>
        <Form onSubmit={this.onSubmit} success={this.state.errorMessage}>
          <Button
            loading={this.state.loading}
            type="submit"
            primary
            floated="right"
          >
            Approve
          </Button>
          <Button floated="left" onClick={this.onDecline}>
            Decline
          </Button>
          <Message success header="Congrats" content={this.state.message} />
        </Form>
      </div>
    );
  }
}

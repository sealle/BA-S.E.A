import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export default class Approval extends Component {
  constructor() {
    super();
  }

  //Get currentUser from Server
  //receive Hash from currentUser
  //Send Hash to Rinkeby

  render() {
    return (
      <div style={{ margin: "auto", width: "650px", marginTop: "15px" }}>
        <Button primary floated="right">
          Approve
        </Button>{" "}
        <Button floated="left">Decline</Button>
      </div>
    );
  }
}

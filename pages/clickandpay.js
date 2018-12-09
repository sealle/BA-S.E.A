import React, { Component } from "react";
import { Link, Router } from "../routes";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Icon,
  Segment,
  Dimmer,
  Loader,
  Image,
  Form,
  Radio,
  Message
} from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import axios from "axios";
import { setCookie } from "../utils/CookieUtils";
import web3 from "../ethereum/src/web3";
import contract from "../ethereum/src/contract";
import swal from "sweetalert2";

//only for banks
class Assets extends Component {
  constructor() {
    super();
    this.state = {
      moreThanTwo: "",
      loading: false,
      checkedAssets1: false,
      checkedAssets2: false,
      countMembers: "",
      terms: false,
      pay: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      error: false,
      value: "",
      metaMask: true,
      waiting: false
    };
    // this.getMembersCount();
    this.submit = e => this._submit();
    this.ownerFormSubmit = e => this._ownerFormSubmit();
    this.toAssets = this.toAssets.bind(this);
    this.toTerms = this.toTerms.bind(this);
    this.toPayment = this.toPayment.bind(this);
    this.handleCheckAssets1 = this.handleCheckAssets1.bind(this);
    this.handleCheckAssets2 = this.handleCheckAssets2.bind(this);
    this.handleCheck1 = this.handleCheck1.bind(this);
    this.handleCheck2 = this.handleCheck2.bind(this);
    this.handleCheck3 = this.handleCheck3.bind(this);
    this.handleCheck4 = this.handleCheck4.bind(this);
    this.handleCheck5 = this.handleCheck5.bind(this);
    this.handleCheck6 = this.handleCheck6.bind(this);
  }

  async componentWillMount() {
    setInterval(() => {
      web3.eth.getAccounts((err, accounts) => {
        if (err != null) console.error("An error occurred: " + err);
        else if (accounts.length == 0) this.setState({ metaMask: false });
        else this.setState({ metaMask: true, myAddress: accounts[0] });
      });
    }, 500);
  }

  handleCheckAssets1() {
    if (this.state.checkedAssets2 === true) {
      this.setState({ checkedAssets2: false, checkedAssets1: true });
    }
    this.setState({ checkedAssets1: !this.state.checkedAssets1 });
  }

  handleCheckAssets2() {
    if (this.state.checkedAssets1 === true) {
      this.setState({ checkedAssets1: false, checkedAssets2: true });
    }
    this.setState({ checkedAssets2: !this.state.checkedAssets2 });
  }

  handleCheck1() {
    this.setState({ checked1: !this.state.checked1 });
  }

  handleCheck2() {
    this.setState({ checked2: !this.state.checked2 });
  }

  //handling checkbox input
  handleCheck3() {
    this.setState({ checked3: !this.state.checked3 });
  }

  //handling checkbox input
  handleCheck4() {
    this.setState({ checked4: !this.state.checked4 });
  }

  //handling checkbox input
  handleCheck5() {
    this.setState({ checked5: !this.state.checked5 });
  }

  handleCheck6() {
    this.setState({ checked6: !this.state.checked6 });
  }

  toAssets() {
    this.setState({ terms: false, pay: false });
  }

  //show terms & conditions
  toTerms() {
    this.setState({ terms: true, pay: false });
  }

  //show pament
  toPayment() {
    this.setState({ pay: true });
  }

  //send beneficial owner data to server
  async _ownerFormSubmit() {
    const formData = new FormData();
    formData.append("ownerName", this.state.ownerFname);
    console.log(this.state.ownerFname);
    console.log(formData);
  }

  //execute ether payment
  async _submit() {
    let response = await axios.post(window.location.origin + "/clickandpay");
    if (response.data.success) {
      setCookie("x-access-token", response.data.videoCookie, 1);
    }

    let accounts = await web3.eth.getAccounts();

    if (this.state.value > 0) {
      this.setState({ loading: true, waiting: true, error: false });
      await contract.methods.payKYC().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether")
      });
      swal({
        title: "Congratulations!",
        text:
          "You have paid. You will be redirected to the video identification",
        type: "success",
        onClose: () => {
          Router.push("/videochat");
        }
      });
    } else if (this.state.value == 0) {
      swal({
        title: "Congratulations!",
        text:
          "You have paid. You will be redirected to the video identification",
        type: "success",
        onClose: () => {
          Router.push("/videochat");
        }
      });
    } else {
      this.setState({ error: true });
    }
    this.setState({ loading: false, waiting: false });
  }

  render() {
    return (
      <div>
        <Layout>
          {/* <p>{this.state.moreThanTwo}</p> */}
          <style>{`
        body {
          background: #e6e6e6;
        }
      `}</style>
          {this.state.terms == false && this.state.pay == false ? (
            <Segment style={{ marginTop: "50px" }}>
              <Dimmer active={this.state.loading}>
                <Loader>Admin is in a Call...</Loader>
              </Dimmer>
              <br />
              <Header
                as="h1"
                textAlign="center"
                style={{ color: "#2985d0", marginTop: "10px" }}
              >
                Identification of the Beneficial Owner
              </Header>
              <Header as="h3" textAlign="center" style={{ marginBottom: 20 }}>
                If the deposited assets are credited to you economically, agree
                with signing the checkbox below
              </Header>
              <Container textAlign="center">
                <Divider />
                <Checkbox
                  label="I agree that I am the sole beneficial owner of the assets"
                  required
                  checked={this.state.checkedAssets1}
                  onChange={this.handleCheckAssets1}
                />
                {this.state.checkedAssets1 ? (
                  <Icon
                    name="check circle"
                    color="green"
                    size="large"
                    style={{ float: "right" }}
                  />
                ) : null}
                <Divider />
                <Checkbox
                  label="I agree that the following persons are beneficial owners of the assets"
                  required
                  checked={this.state.checkedAssets2}
                  onChange={this.handleCheckAssets2}
                />
                {this.state.checkedAssets2 ? (
                  <Icon
                    name="check circle"
                    color="green"
                    size="large"
                    style={{ float: "right" }}
                  />
                ) : null}
                <Divider />
                {this.state.checkedAssets2 ? (
                  <div style={{ marginBottom: "10px" }}>
                    <Segment style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontWeight: "900",
                          fontSize: "17px",
                          borderRadius: "100%",
                          display: "inline",
                          paddingLeft: "6px",
                          paddingRight: "7px",
                          backgroundColor: "black",
                          color: "white"
                        }}
                      >
                        1
                      </p>
                      <Form
                        onSubmit={this.ownerFormSubmit()}
                        style={{ marginTop: "1%" }}
                      >
                        <Form.Group widths="equal">
                          <Form.Input
                            fluid
                            label="First Name"
                            placeholder="First Name"
                            required
                            name="ownerFname"
                            value={this.state.ownerFname}
                            onChange={event =>
                              this.setState({ ownerFname: event.target.value })
                            }
                          />
                          <Form.Input
                            fluid
                            label="Last Name"
                            placeholder="Last Name"
                            required
                            name="ownerLastName"
                            value={this.state.ownerLname}
                            onChange={event =>
                              this.setState({ ownerLname: event.target.value })
                            }
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Input
                            width="eleven"
                            fluid
                            label="Street"
                            placeholder="Street"
                            required
                            name="ownerStreet"
                            value={this.state.ownerStreet}
                            onChange={event =>
                              this.setState({ ownerStreet: event.target.value })
                            }
                          />
                          <Form.Input
                            width="five"
                            type="number"
                            fluid
                            label="House Number"
                            required
                            placeholder="House Number"
                            name="ownerHouseNr"
                            value={this.state.ownerHouseNr}
                            onChange={event =>
                              this.setState({
                                ownerHouseNr: event.target.value
                              })
                            }
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Input
                            width="six"
                            fluid
                            type="number"
                            label="Postal Code"
                            required
                            placeholder="Postal Code"
                            name="ownerPostCode"
                            value={this.state.ownerPostCode}
                            onChange={event =>
                              this.setState({
                                ownerPostCode: event.target.value
                              })
                            }
                          />
                          <Form.Input
                            width="ten"
                            fluid
                            label="Place of Residenz"
                            required
                            placeholder="Place of Residence"
                            name="ownerPlaceOfRes"
                            value={this.state.ownerPlaceOfRes}
                            onChange={event =>
                              this.setState({
                                ownerPlaceOfRes: event.target.value
                              })
                            }
                          />
                        </Form.Group>
                        <Form.Group widths="equal">
                          <Form.Input
                            fluid
                            label="Date of Birth"
                            type="date"
                            required
                            placeholder="YYYY-MM-DD"
                            name="dateOfBirth"
                            value={this.state.dateOfBirth}
                            onChange={event =>
                              this.setState({ dateOfBirth: event.target.value })
                            }
                          />
                        </Form.Group>
                      </Form>
                    </Segment>
                    <Segment style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontWeight: "900",
                          fontSize: "17px",
                          borderRadius: "100%",
                          display: "inline",
                          paddingLeft: "6px",
                          paddingRight: "7px",
                          backgroundColor: "black",
                          color: "white"
                        }}
                      >
                        2
                      </p>
                      <Form style={{ marginTop: "1%" }}>
                        <Form.Group widths="equal">
                          <Form.Input
                            fluid
                            label="First Name"
                            placeholder="First Name"
                            name="fname"
                            value={this.state.fname}
                            onChange={event =>
                              this.setState({ fname: event.target.value })
                            }
                          />
                          <Form.Input
                            fluid
                            label="Last Name"
                            placeholder="Last Name"
                            name="lname"
                            value={this.state.lname}
                            onChange={event =>
                              this.setState({ lname: event.target.value })
                            }
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Input
                            width="eleven"
                            fluid
                            label="Street"
                            placeholder="Street"
                            name="street"
                            value={this.state.street}
                            onChange={event =>
                              this.setState({ street: event.target.value })
                            }
                          />
                          <Form.Input
                            width="five"
                            type="number"
                            fluid
                            label="House Number"
                            placeholder="House Number"
                            name="houseNr"
                            value={this.state.houseNr}
                            onChange={event =>
                              this.setState({ houseNr: event.target.value })
                            }
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Input
                            width="six"
                            fluid
                            type="number"
                            label="Postal Code"
                            placeholder="Postal Code"
                            name="postCode"
                            value={this.state.postCode}
                            onChange={event =>
                              this.setState({ postCode: event.target.value })
                            }
                          />
                          <Form.Input
                            width="ten"
                            fluid
                            label="Place of Residenz"
                            placeholder="Place of Residence"
                            name="placeOfRes"
                            value={this.state.placeOfRes}
                            onChange={event =>
                              this.setState({ placeOfRes: event.target.value })
                            }
                          />
                        </Form.Group>
                        <Form.Group widths="equal">
                          <Form.Input
                            fluid
                            label="Date of Birth"
                            type="date"
                            placeholder="YYYY-MM-DD"
                            name="dateOfBirth"
                            value={this.state.dateOfBirth}
                            onChange={event =>
                              this.setState({ dateOfBirth: event.target.value })
                            }
                          />
                        </Form.Group>
                      </Form>
                    </Segment>
                    <Segment style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontWeight: "900",
                          fontSize: "17px",
                          borderRadius: "100%",
                          display: "inline",
                          paddingLeft: "6px",
                          paddingRight: "7px",
                          backgroundColor: "black",
                          color: "white"
                        }}
                      >
                        3
                      </p>
                      <Form style={{ marginTop: "1%" }}>
                        <Form.Group widths="equal">
                          <Form.Input
                            fluid
                            label="First Name"
                            placeholder="First Name"
                            required
                            name="fname"
                            value={this.state.fname}
                            onChange={event =>
                              this.setState({ fname: event.target.value })
                            }
                          />
                          <Form.Input
                            fluid
                            label="Last Name"
                            placeholder="Last Name"
                            required
                            name="lname"
                            value={this.state.lname}
                            onChange={event =>
                              this.setState({ lname: event.target.value })
                            }
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Input
                            width="eleven"
                            fluid
                            label="Street"
                            placeholder="Street"
                            required
                            name="street"
                            value={this.state.street}
                            onChange={event =>
                              this.setState({ street: event.target.value })
                            }
                          />
                          <Form.Input
                            width="five"
                            type="number"
                            fluid
                            label="House Number"
                            required
                            placeholder="House Number"
                            name="houseNr"
                            value={this.state.houseNr}
                            onChange={event =>
                              this.setState({ houseNr: event.target.value })
                            }
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Input
                            width="six"
                            fluid
                            type="number"
                            label="Postal Code"
                            required
                            placeholder="Postal Code"
                            name="postCode"
                            value={this.state.postCode}
                            onChange={event =>
                              this.setState({ postCode: event.target.value })
                            }
                          />
                          <Form.Input
                            width="ten"
                            fluid
                            label="Place of Residenz"
                            required
                            placeholder="Place of Residence"
                            name="placeOfRes"
                            value={this.state.placeOfRes}
                            onChange={event =>
                              this.setState({ placeOfRes: event.target.value })
                            }
                          />
                        </Form.Group>
                        <Form.Group widths="equal">
                          <Form.Input
                            fluid
                            label="Date of Birth"
                            type="date"
                            required
                            placeholder="YYYY-MM-DD"
                            name="dateOfBirth"
                            value={this.state.dateOfBirth}
                            onChange={event =>
                              this.setState({ dateOfBirth: event.target.value })
                            }
                          />
                        </Form.Group>
                      </Form>
                    </Segment>
                  </div>
                ) : null}
                {this.state.checkedAssets1 || this.state.checkedAssets2 ? (
                  <Button
                    primary
                    icon
                    labelPosition="right"
                    onClick={this.toTerms}
                  >
                    Next
                    <Icon name="right arrow" />
                  </Button>
                ) : (
                  <Button primary icon labelPosition="right" disabled>
                    Next
                    <Icon name="right arrow" />
                  </Button>
                )}
              </Container>
            </Segment>
          ) : this.state.terms == true && this.state.pay == false ? (
            <Segment style={{ marginTop: "50px" }}>
              <Dimmer active={this.state.loading}>
                <Loader>Admin is in a Call...</Loader>
              </Dimmer>
              <br />
              <Header
                as="h1"
                textAlign="center"
                style={{ color: "#2985d0", marginTop: "10px" }}
              >
                Terms and Conditions
              </Header>
              <Header as="h3" textAlign="center" style={{ marginBottom: 20 }}>
                Make sure you accept all terms and conditions
              </Header>
              <Container textAlign="center">
                <Checkbox
                  label="I confirm to have my identity card ready"
                  required
                  checked={this.state.checked1}
                  onChange={this.handleCheck1}
                />
                {this.state.checked1 ? (
                  <Icon
                    name="check circle"
                    color="green"
                    size="large"
                    style={{ float: "right" }}
                  />
                ) : null}
                <Divider />
                <Checkbox
                  label="I agree that the audio line is beeing recorded"
                  required
                  checked={this.state.checked2}
                  onChange={this.handleCheck2}
                />
                {this.state.checked2 ? (
                  <Icon
                    name="check circle"
                    color="green"
                    size="large"
                    style={{ float: "right" }}
                  />
                ) : null}
                <Divider />
                <Checkbox
                  label="I confirm that I have a good internet connection"
                  required
                  checked={this.state.checked3}
                  onChange={this.handleCheck3}
                />
                {this.state.checked3 ? (
                  <Icon
                    name="check circle"
                    color="green"
                    size="large"
                    style={{ float: "right" }}
                  />
                ) : null}
                <Divider />
                <Checkbox
                  label="I confirm that I am in a silent environment"
                  required
                  checked={this.state.checked4}
                  onChange={this.handleCheck4}
                />
                {this.state.checked4 ? (
                  <Icon
                    name="check circle"
                    color="green"
                    size="large"
                    style={{ float: "right" }}
                  />
                ) : null}
                <Divider />
                <Checkbox
                  label="I confirm that I have a good microphone (preferably headset)"
                  required
                  checked={this.state.checked5}
                  onChange={this.handleCheck5}
                />
                {this.state.checked5 ? (
                  <Icon
                    name="check circle"
                    color="green"
                    size="large"
                    style={{ float: "right" }}
                  />
                ) : null}
                <Divider />
                <Checkbox
                  label="I agree to pay a fee for the video identification"
                  required
                  checked={this.state.checked6}
                  onChange={this.handleCheck6}
                />
                {this.state.checked6 ? (
                  <Icon
                    name="check circle"
                    color="green"
                    size="large"
                    style={{ float: "right" }}
                  />
                ) : null}
                <Divider />
                {this.state.checked1 &&
                this.state.checked2 &&
                this.state.checked3 &&
                this.state.checked4 &&
                this.state.checked5 &&
                this.state.checked6 ? (
                  <Container style={{ display: "inline-block" }}>
                    <Button
                      icon
                      labelPosition="left"
                      floated="left"
                      onClick={this.toAssets}
                    >
                      <Icon name="left arrow" />
                      Back
                    </Button>
                    <Button
                      primary
                      labelPosition="right"
                      floated="right"
                      icon
                      onClick={this.toPayment}
                    >
                      Next <Icon name="right arrow" />
                    </Button>
                  </Container>
                ) : (
                  <Container style={{ display: "inline-block" }}>
                    <Button
                      icon
                      labelPosition="left"
                      floated="left"
                      onClick={this.toAssets}
                      style={{ display: "inline-block" }}
                    >
                      <Icon name="left arrow" />
                      Back
                    </Button>
                    <Button
                      primary
                      labelPosition="right"
                      floated="right"
                      icon
                      disabled
                      onClick={this.toPayment}
                    >
                      Next <Icon name="right arrow" />
                    </Button>
                  </Container>
                )}
              </Container>
            </Segment>
          ) : this.state.terms == true && this.state.pay == true ? (
            <div>
              <Segment
                style={{
                  // maxWidth: "450px",
                  // margin: "auto",
                  marginTop: "50px"
                }}
              >
                <Header
                  as="h1"
                  textAlign="center"
                  style={{ marginTop: "10px", color: "#2985d0" }}
                >
                  Payment
                </Header>
                <Header as="h3" textAlign="center" style={{ marginBottom: 20 }}>
                  Please enter a value you are willing to pay
                </Header>
                {this.state.metaMask == false ? (
                  <Message error content="Please login to Metamask" />
                ) : null}
                {this.state.waiting == true ? (
                  <Message
                    warning
                    content="Waiting on transaction success..."
                  />
                ) : null}
                <Form onSubmit={this.submit} error={this.state.error}>
                  <Form.Field>
                    {/* <label> Username </label> */}
                    <Form.Input
                      icon="ethereum"
                      iconPosition="left"
                      placeholder="Ether"
                      id="value"
                      value={this.state.value}
                      onChange={event =>
                        this.setState({ value: event.target.value })
                      }
                    />
                  </Form.Field>
                  {/* {this.state.error ?  */}
                  <Message
                    error
                    header="Oops!"
                    content="Please enter a value"
                  />
                  <Button
                    fluid
                    icon
                    size="large"
                    color="blue"
                    loading={this.state.loading}
                  >
                    <Icon name="check circle outline" size="large" />
                  </Button>
                </Form>
                <Button
                  style={{ backgroundColor: "white" }}
                  fluid
                  onClick={this.toTerms}
                >
                  {" "}
                  <Icon name="arrow left" /> back
                </Button>
              </Segment>
            </div>
          ) : null}
        </Layout>
      </div>
    );
  }
}

export default Assets;

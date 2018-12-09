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
  Radio
} from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import axios from "axios";
import { setCookie } from "../utils/CookieUtils";

//only for banks
class Assets extends Component {
  constructor() {
    super();
    this.state = {
      moreThanTwo: "",
      loading: false,
      checked1: false,
      checked1: false,
      countMembers: ""
    };
    // this.getMembersCount();
    this.toTerms = this.toTerms.bind(this);
    this.handleCheck1 = this.handleCheck1.bind(this);
    this.handleCheck2 = this.handleCheck2.bind(this);
  }

  handleCheck1() {
    if (this.state.checked2 === true) {
      this.setState({ checked2: false, checked1: true });
    }
    this.setState({ checked1: !this.state.checked1 });
  }

  handleCheck2() {
    if (this.state.checked1 === true) {
      this.setState({ checked1: false, checked2: true });
    }
    this.setState({ checked2: !this.state.checked2 });
  }

  async toTerms() {
    this.setState({ loading: false });
    let response = await axios.post(window.location.origin + "/assets");
    if (response.data.success) {
      //update cookie
      setCookie("x-access-token", "", -60*60);
      setCookie("x-access-token", response.data.assetCookie, 1);
      Router.push("/terms");
    }

    // }
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
                label="I agree that the following persons are beneficial owners of the assets"
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
              {this.state.checked2 ? (
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
              {this.state.checked1 || this.state.checked2 ? (
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
        </Layout>
      </div>
    );
  }
}

export default Assets;

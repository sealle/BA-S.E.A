import React, { Component } from "react";
import { Link, Router } from "../routes";
import { Form, Button, Icon, Popup, Message } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import HomeHeader from "../components/HomeHeader";
import axios from "axios";

const parse = require("mrz").parse;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      fname: "",
      lname: "",
      street: "",
      houseNr: "",
      postCode: "",
      placeOfRes: "",
      dateOfBirth: "",
      nat: "",
      email: "",
      mobNr: "",
      errorMessage: "",
      successMessage: "",
      loading: false,
      file1: "",
      file2: "",
      files: [],
      prev1: "",
      prev2: "",
      showResults: false
    };

    this.handleSubmit = e => this._handleSubmit();
  }

  async _handleSubmit() {
    this.setState({ loading: true });

    const formData = new FormData();
    formData.append("file1", this.state.file1);
    formData.append("file2", this.state.file2);
    formData.append("fname", this.state.fname);
    formData.append("lname", this.state.lname);
    formData.append("street", this.state.street);
    formData.append("houseNr", this.state.houseNr);
    formData.append("postCode", this.state.postCode);
    formData.append("placeOfRes", this.state.placeOfRes);
    formData.append("dateOfBirth", this.state.dateOfBirth);
    formData.append("nat", this.state.nat);
    formData.append("email", this.state.email);
    formData.append("mobNr", this.state.mobNr);
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);
    formData.append("errorMessage", this.state.errorMessage);

    try {
      const response = await axios.post(
        window.location.origin + "/register",
        formData
      );
      if (response.data.success) {
        Router.push("/login"); //TODO: add success popup
      }
    } catch (error) {
      this.setState({ errorMessage: error.response.data.message }); //TODO: get errorMessage if only one or null pictures were uploaded! -> server
    }
    this.setState({ loading: false });
  }

  handleFileChange = e => {
    this.setState({ file1: e.target.files[0] });
    this.setState({ file2: e.target.files[1] });
    this.setState({ prev1: URL.createObjectURL(e.target.files[0]) }); //image-preview
    this.setState({ prev2: URL.createObjectURL(e.target.files[1]) }); //image-preview
    this.setState({ showResults: true });
  };

  //check mrz code
  isValid = () => {
    let res = parse(this.state.mrz);
    this.result = res;
    if (res.valid === true) {
      console.log("Your ID is valid");
    } else {
      console.log("Your ID is not valid");
    }
    console.log(this.result);
  };

  render() {
    return (
      <div>
        <HomeHeader />
        <Layout>
          <Header as="h1" textAlign="center" style={{ marginTop: 60 }}>
            Registration
          </Header>
          <br />
          <Form onSubmit={this.handleSubmit} error={this.state.errorMessage}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Username"
                placeholder="Username"
                required
                name="username"
                value={this.state.username}
                onChange={event =>
                  this.setState({ username: event.target.value })
                }
              />
              <Form.Input
                fluid
                type="password"
                label="Password"
                placeholder="Password"
                required
                name="password"
                value={this.state.password}
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First Name"
                placeholder="First Name"
                name="fname"
                value={this.state.fname}
                onChange={event => this.setState({ fname: event.target.value })}
              />
              <Form.Input
                fluid
                label="Last Name"
                placeholder="Last Name"
                name="lname"
                value={this.state.lname}
                onChange={event => this.setState({ lname: event.target.value })}
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
                value={this.state.DateOfBirth}
                onChange={event =>
                  this.setState({ DateOfBirth: event.target.value })
                }
              />
              <Form.Input
                fluid
                label="Nationality"
                placeholder="Switzerland"
                name="nat"
                value={this.state.nat}
                onChange={event => this.setState({ nat: event.target.value })}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Email"
                type="email"
                placeholder="email@email.com"
                name="email"
                value={this.state.email}
                onChange={event => this.setState({ email: event.target.value })}
              />
              <Form.Input
                fluid
                label="Mobile Number"
                type="number"
                placeholder="079 246 1102"
                name="mobNr"
                value={this.state.mobNr}
                onChange={event => this.setState({ mobNr: event.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                fluid
                type="file"
                width="sixteen"
                label="ID front- and backside! (.png or .jpg)"
                name="file"
                id="file"
                multiple
                onChange={this.handleFileChange}
              />
            </Form.Group>
            {this.state.showResults ? (
              <div className="image-preview">
                <img
                  src={this.state.prev1}
                  style={{ width: "200px", height: "113px", float: "left" }}
                />
                <img
                  src={this.state.prev2}
                  style={{ width: "200px", height: "113px", float: "right" }}
                />
              </div>
            ) : null}
            {/*<Form.Group>
                            <Form.TextArea
                                value={this.state.mrz}
                                onChange={event => this.setState({mrz: event.target.value})}
                                name="mrz"
                                style={{marginLeft: 162.5}}
                                width="eight"
                                rows="3"
                                cols="50"
                                label="Enter your MRZ Code here"
                                placeholder="IDCHEC7407926<1<<<<<<<<<<<<<<<
                                         9406188M2407016CHE<<<<<<<<<<<4
                                         ALLEMANN<<SEBASTIAN<EMMANUEL<<"/>
                        </Form.Group>
                        <Icon name="attention" size="big" style={{marginLeft: 305}}></Icon>
                        <p style={{marginLeft: 80, fontSize: 15}}>If you are registering on behalf of a company, please
                            fill in these additional fields:</p>
                        <Form.Group>
                            <Form.Input width="ten" fluid label="Company Name" placeholder="Company Name"/>
                            <Form.Input width="eight" fluid label="Registration Number"
                                        placeholder="Registration Number"/>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input fluid label="Place of Registration" placeholder="Place of Registration"/>
                            <Form.Input fluid label="Residence" placeholder="Residence"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input width="eleven" fluid label="Business Address" placeholder="Business Address"/>
                            <Form.Input width="five" fluid label="House Number" placeholder="House Number"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input fluid type="file" width="eight" label="Excerpt of commercial register"
                                        name="comReg"/>
                            <Form.Input fluid type="file" width="eight"
                                        label="Provisions regulating the power to bind the legal entity"
                                        name="legalEnt"/>
                        </Form.Group>*/}
            {/* TODO: how to handle company registrations... neccessary?*/}
            <Button
              style={{ marginLeft: 280 }}
              primary
              loading={this.state.loading}
            >
              Submit
            </Button>
            <Message error header="Oops!" content={this.state.errorMessage} />
          </Form>
          <br />
          <br />
        </Layout>
      </div>
    );
  }
}

export default Register;

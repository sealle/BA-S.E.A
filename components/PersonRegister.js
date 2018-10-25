import React, { Component } from "react";
import { Link, Router } from "../routes";
import { Form, Button, Icon, Popup, Message } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "./Layout";
import HomeHeader from "./HomeHeader";
import axios from "axios";
import swal from "sweetalert2";

class PersonRegister extends Component {
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
        swal("Congratulations!", "You have successfully registered. Now please login to complete the process", "success");
        Router.push("/login"); //TODO: add success popup
      }
    } catch (error) {
      this.setState({ errorMessage: error.response.data.message });
    }
    this.setState({ loading: false });
  }

  handleFileChange = e => {
    if (!e.target.files[0] || !e.target.files[1] || e.target.files[2]) {
      this.setState({ errorMessage: "You have to upload 2 images!" });
    } else {
      this.setState({
        file1: e.target.files[0],
        file2: e.target.files[1],
        prev1: URL.createObjectURL(e.target.files[0]),
        prev2: URL.createObjectURL(e.target.files[1]),
        showResults: true,
        errorMessage: ""
      });
    }
  };

  render() {
    return (
      <div>
        <Layout>
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
                required
                name="fname"
                value={this.state.fname}
                onChange={event => this.setState({ fname: event.target.value })}
              />
              <Form.Input
                fluid
                label="Last Name"
                placeholder="Last Name"
                required
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
              <Form.Input
                fluid
                label="Nationality"
                required
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
                required
                placeholder="email@email.com"
                name="email"
                value={this.state.email}
                onChange={event => this.setState({ email: event.target.value })}
              />
              <Form.Input
                fluid
                label="Mobile Number"
                type="number"
                required
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
                required
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
            {this.state.showResults ? (
              <Button
                style={{ marginLeft: 280 }}
                primary
                loading={this.state.loading}
              >
                Submit
              </Button>
            ) : (
              <Button primary style={{ marginLeft: 280 }} disabled>
                Submit
              </Button>
            )}
            <Message error header="Oops!" content={this.state.errorMessage} />
          </Form>
          <br />
          <br />
        </Layout>
      </div>
    );
  }
}

export default PersonRegister;

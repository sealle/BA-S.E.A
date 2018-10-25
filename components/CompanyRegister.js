import React, { Component } from "react";
import { Link, Router } from "../routes";
import { Form, Button, Icon, Popup, Message, Grid } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import HomeHeader from "../components/HomeHeader";
import axios from "axios";
import swal from "sweetalert2";

class CompanyRegister extends Component {
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
      compName: "",
      regNr: "",
      placeOfReg: "",
      residence: "",
      businessAd: "",
      compHouseNr: "",
      errorMessage: "",
      successMessage: "",
      loading: false,
      file1: "",
      file2: "",
      doc1: "",
      doc2: "",
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
    formData.append("compName", this.state.compName);
    formData.append("regNr", this.state.regNr);
    formData.append("placeOfReg", this.state.placeOfReg);
    formData.append("residence", this.state.residence);
    formData.append("businessAd", this.state.businessAd);
    formData.append("compHouseNr", this.state.compHouseNr);
    formData.append("doc1", this.state.doc1);
    formData.append("doc2", this.state.doc2);

    try {
      const response = await axios.post(
        window.location.origin + "/companyregister",
        formData
      );
      if (response.data.success) {
        swal(
          "Congratulations!",
          "You have successfully registered. Now please login to complete the process",
          "success"
        );
        Router.push("/login"); //TODO: add success popup
      }
    } catch (error) {
      this.setState({ errorMessage: error.response.data.message });
    }
    this.setState({ loading: false });
  }

  handleImageFileChange = e => {
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

  handleDocFileChange = e => {
    this.setState({
      doc1: e.target.files[0]
    });
  };

  handleDoc2FileChange = e => {
    this.setState({
      doc2: e.target.files[0]
    });
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
                onChange={this.handleImageFileChange}
              />
            </Form.Group>
            {this.state.showResults ? (
              <div className="image-preview">
                <Grid>
                  <Grid.Column width={8}>
                    <img
                      src={this.state.prev1}
                      style={{ width: "200px", height: "113px", float: "left" }}
                    />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <img
                      src={this.state.prev2}
                      style={{
                        width: "200px",
                        height: "113px",
                        float: "right"
                      }}
                    />
                  </Grid.Column>
                </Grid>
              </div>
            ) : null}
            <Form.Group />
            <Form.Group>
              <Form.Input
                width="ten"
                fluid
                name="compName"
                required
                label="Company Name"
                placeholder="Company Name"
                value={this.state.compName}
                onChange={event =>
                  this.setState({ compName: event.target.value })
                }
              />
              <Form.Input
                width="eight"
                fluid
                name="regNr"
                required
                label="Registration Number"
                placeholder="Registration Number"
                value={this.state.regNr}
                onChange={event => this.setState({ regNr: event.target.value })}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Place of Registration"
                name="placeOfReg"
                required
                placeholder="Place of Registration"
                value={this.state.placeOfReg}
                onChange={event =>
                  this.setState({ placeOfReg: event.target.value })
                }
              />
              <Form.Input
                fluid
                label="Residence"
                name="residence"
                required
                placeholder="Residence"
                value={this.state.residence}
                onChange={event =>
                  this.setState({ residence: event.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                width="eleven"
                required
                fluid
                name="businessAd"
                label="Business Address"
                placeholder="Business Address"
                value={this.state.businessAd}
                onChange={event =>
                  this.setState({ businessAd: event.target.value })
                }
              />
              <Form.Input
                width="five"
                fluid
                type="number"
                required
                name="compHouseNr"
                label="House Number"
                placeholder="House Number"
                value={this.state.compHouseNr}
                onChange={event =>
                  this.setState({ compHouseNr: event.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                fluid
                name="doc1"
                id="doc1"
                required
                type="file"
                width="eight"
                label="Excerpt of commercial register (1 page only!)"
                onChange={this.handleDocFileChange}
              />
              <Form.Input
                fluid
                name="doc2"
                id="doc2"
                required
                type="file"
                width="eight"
                label="Provisions regulating the power to bind the legal entity (1 page only!)"
                onChange={this.handleDoc2FileChange}
              />
            </Form.Group>
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

export default CompanyRegister;

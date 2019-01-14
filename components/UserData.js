import React, { Component } from "react";
import {
  Icon,
  Container,
  Header,
  Segment,
  Button,
  Form,
  Popup
} from "semantic-ui-react";
import axios from "axios";

export default class UserData extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isComp: "",
      fileURL: "",
      inAddressEdit: false,
      inEmailEdit: false,
      inMobileEdit: false,
      inCompNameEdit: false,
      inCompAddressEdit: false,
    };
  }

  //get user data from server
  async componentWillMount() {
    try {
      const response = await axios.post(window.location.origin + "/users");
      if (response.data.success) {
        this.setState({
          users: response.data.userData,
          img1: response.data.pic1,
          img2: response.data.pic2,
          doc1: response.data.doc1,
          doc2: response.data.doc2,
          isComp: response.data.isComp
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  //edit address
  editAddress = () => {
    this.setState({
      inAddressEdit: true,
      inEmailEdit: false,
      inMobileEdit: false,
      inCompNameEdit: false,
      inCompAddressEdit: false
    });
  };

  //edit email address
  editEmail = () => {
    this.setState({
      inAddressEdit: false,
      inEmailEdit: true,
      inMobileEdit: false,
      inCompNameEdit: false,
      inCompAddressEdit: false
    });
  };

  //edit mobile number
  editMobile = () => {
    this.setState({
      inAddressEdit: false,
      inEmailEdit: false,
      inMobileEdit: true,
      inCompNameEdit: false,
      inCompAddressEdit: false
    });
  };

  //edit company name
  editCompName = () => {
    this.setState({
      inAddressEdit: false,
      inEmailEdit: false,
      inMobileEdit: false,
      inCompNameEdit: true,
      inCompAddressEdit: false
    });
  };

  //edit company address
  editCompAddress = () => {
    this.setState({
      inAddressEdit: false,
      inEmailEdit: false,
      inMobileEdit: false,
      inCompNameEdit: false,
      inCompAddressEdit: true
    });
  };

  //exit editing mode
  exitEditMode = () => {
    this.setState({
      inAddressEdit: false,
      inEmailEdit: false,
      inMobileEdit: false,
      inCompNameEdit: false,
      inCompAddressEdit: false
    });
  };

  //save address and send data to server
  saveAddress = async () => {
    let formData = new FormData();

    formData.append("street", this.state.street);
    formData.append("houseNr", this.state.houseNr);
    formData.append("postCode", this.state.postCode);
    formData.append("placeOfRes", this.state.placeOfRes);
    formData.append("username", this.state.users[0].username);

    console.log(this.state.users[0].username, this.state.street);

    let response = await axios.post(
      window.location.origin + "/editData",
      formData
    );
    if (response.data.success) {
      this.exitEditMode();
    }
    window.location.href = "/profile";
  };

  //save email address and send data to server
  saveEmail = async () => {
    let email = this.state.email;
    let userName = this.state.users[0].username;
    let response = await axios.post(window.location.origin + "/editData", {
      email,
      userName
    });
    if (response.data.success) {
      this.exitEditMode();
    }
    window.location.href = "/profile";
  };

  //save mobile number and send data to server
  saveMobile = async () => {
    let mobNr = this.state.mobNr;
    let userName = this.state.users[0].username;
    let response = await axios.post(window.location.origin + "/editData", {
      mobNr,
      userName
    });
    if (response.data.success) {
      this.exitEditMode();
    }
    window.location.href = "/profile";
  };

  //save company name and send data to server
  saveCompName = async () => {
    let compName = this.state.compName;
    let userName = this.state.users[0].username;
    let response = await axios.post(window.location.origin + "/editData", {
      compName,
      userName
    });
    if (response.data.success) {
      this.exitEditMode();
    }
    window.location.href = "/profile";
  };

  //save company address and send data to server
  saveCompAddress = async () => {
    let formData = new FormData();

    formData.append("businessAd", this.state.businessAd);
    formData.append("compHouseNr", this.state.compHouseNr);
    formData.append("compPostCode", this.state.compPostCode);
    formData.append("residence", this.state.residence);
    formData.append("username", this.state.users[0].username);

    let response = await axios.post(
      window.location.origin + "/editData",
      formData
    );
    if (response.data.success) {
      this.exitEditMode();
    }
    window.location.href = "/profile";
  };

  render() {
    return (
      <div>
        <Segment style={{ width: "98%", marginLeft: "16px" }}>
          <Header
            as="h1"
            style={{
              textAlign: "center",
              marginTop: "10px",
              color: "#2985d0"
            }}
          >
            Your Profile
          </Header>
          <Container style={{ marginTop: "10px" }}>
            <Container style={{ display: "inline-block" }}>
              {this.state.inAddressEdit == true ||
              this.state.inEmailEdit == true ||
              this.state.inMobileEdit == true ||
              this.state.inCompNameEdit == true ||
              this.state.inCompAddressEdit == true ? (
                <Button
                  floated="left"
                  style={{ backgroundColor: "white", marginLeft: "-20px" }}
                  onClick={this.exitEditMode}
                >
                  <Icon name="close" />
                </Button>
              ) : null}
              {this.state.isComp == "1" ? (
                <div>
                  <Popup
                    trigger={
                      <Button
                        floated="right"
                        animated="vertical"
                        style={{ marginRight: "3px", backgroundColor: "white" }}
                        onClick={this.editCompAddress}
                        icon
                      >
                        <Icon name="location arrow" />
                      </Button>
                    }
                    content="Edit business address"
                    hideOnScroll
                  />
                  <Popup
                    trigger={
                      <Button
                        floated="right"
                        animated="vertical"
                        style={{ marginRight: "3px", backgroundColor: "white" }}
                        onClick={this.editCompName}
                        icon
                      >
                        <Icon name="globe" />
                      </Button>
                    }
                    content="Edit company name"
                    hideOnScroll
                  />
                </div>
              ) : null}
              <Popup
                trigger={
                  <Button
                    floated="right"
                    animated="vertical"
                    style={{ marginRight: "3px", backgroundColor: "white" }}
                    onClick={this.editMobile}
                    icon
                  >
                    <Icon name="phone" />
                  </Button>
                }
                content="Edit mobile number"
                hideOnScroll
              />
              <Popup
                trigger={
                  <Button
                    floated="right"
                    animated="vertical"
                    style={{ marginRight: "3px", backgroundColor: "white" }}
                    onClick={this.editEmail}
                    icon
                  >
                    <Icon name="mail" />
                  </Button>
                }
                content="Edit email"
                hideOnScroll
              />
              <Popup
                trigger={
                  <Button
                    floated="right"
                    animated="vertical"
                    style={{ marginRight: "3px", backgroundColor: "white" }}
                    onClick={this.editAddress}
                    icon
                  >
                    <Icon name="home" />
                  </Button>
                }
                content="Edit address"
                hideOnScroll
              />
            </Container>
            {this.state.inAddressEdit == false &&
            this.state.inCompAddressEdit == false &&
            this.state.inCompNameEdit == false &&
            this.state.inEmailEdit == false &&
            this.state.inMobileEdit == false ? (
              <Form>
                {this.state.users.map(member => (
                  <div>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        label="Username"
                        value={member.username}
                      />
                      <Form.Input readOnly fluid label="ID" value={member.id} />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        readOnly
                        fluid
                        label="First Name"
                        value={member.fname}
                      />
                      <Form.Input
                        readOnly
                        fluid
                        label="Last Name"
                        value={member.lname}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Input
                        readOnly
                        width="eleven"
                        fluid
                        label="Street"
                        value={member.street}
                      />
                      <Form.Input
                        readOnly
                        width="five"
                        type="number"
                        fluid
                        label="House Number"
                        value={member.houseNr}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Input
                        readOnly
                        width="six"
                        fluid
                        type="number"
                        label="Postal Code"
                        value={member.postCode}
                      />
                      <Form.Input
                        readOnly
                        width="ten"
                        fluid
                        label="Place of Residence"
                        value={member.placeOfRes}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        readOnly
                        fluid
                        label="Date of Birth"
                        value={member.dateOfBirth}
                      />
                      <Form.Input
                        readOnly
                        fluid
                        label="Nationality"
                        value={member.nat}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        readOnly
                        fluid
                        label="Email"
                        value={member.email}
                      />
                      <Form.Input
                        readOnly
                        fluid
                        label="Mobile Number"
                        value={member.mobNr}
                      />
                    </Form.Group>
                    <Form.Group width="sixteen">
                      <Form.Input
                        width="sixteen"
                        readOnly
                        fluid
                        label="Registration Date"
                        value={member.regDate}
                      />
                    </Form.Group>

                    <Form.Group width="sixteen">
                      <Form.Input
                        width="sixteen"
                        readOnly
                        fluid
                        label="KycKey"
                        value={member.kycKey}
                      />
                    </Form.Group>
                    {/* {this.state.ethAddresses.length > 0 ? (
                    <p style={{ fontWeight: "bold" }}>
                      EthAddresses which requested the KycKey
                    </p>
                  ) : null}

                  {this.state.ethAddresses.map(ethAddress => (
                    <Form.Group width="sixteen">
                      <Form.Input
                        width="sixteen"
                        readOnly
                        fluid
                        // label={i}
                        value={member.ethAddress}
                      />
                    </Form.Group>
                  ))} */}

                    <p style={{ fontWeight: "bold" }}>Identity Card</p>
                    <Form.Group widths="equal" style={{ margin: "0px auto" }}>
                      <a
                        href={`../static/${this.state.img1}`}
                        target="_blank"
                        style={{ width: "50%" }}
                      >
                        <img
                          className="img-responsive"
                          src={`../static/${this.state.img1}`}
                          style={{
                            width: "200px",
                            height: "113px"
                          }}
                        />
                      </a>
                      <a href={`../static/${this.state.img2}`} target="_blank">
                        <img
                          className="img-responsive"
                          src={`../static/${this.state.img2}`}
                          style={{
                            width: "200px",
                            height: "113px"
                          }}
                        />
                      </a>
                    </Form.Group>
                    {this.state.isComp == "1" ? (
                      <div>
                        <Form.Group style={{ marginTop: "10px" }}>
                          <Form.Input
                            readOnly
                            width="sixteen"
                            fluid
                            label="Company Name"
                            value={member.compName}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Input
                            readOnly
                            width="eleven"
                            fluid
                            label="Business Address"
                            value={member.businessAd}
                          />
                          <Form.Input
                            readOnly
                            width="five"
                            fluid
                            label="House Number"
                            value={member.compHouseNr}
                          />
                        </Form.Group>
                        <Form.Group widths="equal">
                          <Form.Input
                            readOnly
                            width="six"
                            fluid
                            label="Postal Code"
                            value={member.compPostCode}
                          />
                          <Form.Input
                            readOnly
                            width="ten"
                            fluid
                            label="Place of Residenz"
                            value={member.residence}
                          />
                        </Form.Group>
                        <Form.Group
                          width="sixteen"
                          style={{ margin: "0px auto" }}
                        >
                          <Icon name="linkify" />
                          <a
                            href={`../static/${this.state.doc1}`}
                            type="application/pdf"
                            target="_blank"
                          >
                            View extract of the relevant registration authority
                          </a>
                        </Form.Group>
                        <Form.Group
                          width="sixteen"
                          style={{ margin: "0px auto" }}
                        >
                          <Icon name="linkify" />
                          <a
                            href={`../static/${this.state.doc2}`}
                            type="application/pdf"
                            target="_blank"
                          >
                            View electronic copy of the power of attorney
                          </a>
                        </Form.Group>
                      </div>
                    ) : null}
                  </div>
                ))}
              </Form>
            ) : this.state.inAddressEdit == true ? (
              <Form onSubmit={this.saveAddress}>
                <Form.Group>
                  <Form.Input
                    width="eleven"
                    fluid
                    label="Street"
                    required
                    placeholder="Street"
                    name="street"
                    value={this.state.street}
                    onChange={event =>
                      this.setState({ street: event.target.value })
                    }
                  />
                  <Form.Input
                    width="five"
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
                    name="postCode"
                    required
                    placeholder="Postal Code"
                    label="Postal Code"
                    value={this.state.postCode}
                    onChange={event =>
                      this.setState({ postCode: event.target.value })
                    }
                  />
                  <Form.Input
                    width="ten"
                    fluid
                    required
                    placeholder="Place of Residence"
                    name="placeOfRes"
                    label="Place of Residence"
                    value={this.state.placeOfRes}
                    onChange={event =>
                      this.setState({ placeOfRes: event.target.value })
                    }
                  />
                </Form.Group>
                <Container
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <Button>Save</Button>
                </Container>
              </Form>
            ) : this.state.inEmailEdit ? (
              <Form onSubmit={this.saveEmail}>
                <Form.Group>
                  <Form.Input
                    width="sixteen"
                    fluid
                    name="email"
                    required
                    placeholder="Email"
                    label="Email"
                    type="email"
                    value={this.state.email}
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </Form.Group>
                <Container
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <Button>Save</Button>
                </Container>
              </Form>
            ) : this.state.inMobileEdit ? (
              <Form onSubmit={this.saveMobile}>
                <Form.Group>
                  <Form.Input
                    width="sixteen"
                    name="mobNr"
                    placeholder="+4* *** ** **"
                    fluid
                    required
                    label="Mobile Number"
                    type="number"
                    value={this.state.mobNr}
                    onChange={event =>
                      this.setState({ mobNr: event.target.value })
                    }
                  />
                </Form.Group>
                <Container
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <Button>Save</Button>
                </Container>
              </Form>
            ) : this.state.isComp == "1" && this.state.inCompNameEdit ? (
              <Form onSubmit={this.saveCompName}>
                <Form.Group style={{ marginTop: "10px" }}>
                  <Form.Input
                    width="sixteen"
                    fluid
                    required
                    label="Company Name"
                    name="compName"
                    placeholder="Company Name"
                    value={this.state.compName}
                    onChange={event =>
                      this.setState({ compName: event.target.value })
                    }
                  />
                </Form.Group>
                <Container
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <Button>Save</Button>
                </Container>
              </Form>
            ) : this.state.isComp == "1" && this.state.inCompAddressEdit ? (
              <Form onSubmit={this.saveCompAddress}>
                <Form.Group>
                  <Form.Input
                    width="eleven"
                    fluid
                    required
                    name="businessAd"
                    placeholder="Street"
                    label="Business Address"
                    value={this.state.businessAd}
                    onChange={event =>
                      this.setState({ businessAd: event.target.value })
                    }
                  />
                  <Form.Input
                    width="five"
                    fluid
                    required
                    label="House Number"
                    placeholder="House Nr"
                    name="compHouseNr"
                    value={this.state.compHouseNr}
                    onChange={event =>
                      this.setState({ compHouseNr: event.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    width="six"
                    name="compPostCode"
                    fluid
                    required
                    label="Postal Code"
                    type="number"
                    placeholder="Postal Code"
                    value={this.state.compPostCode}
                    onChange={event =>
                      this.setState({
                        compPostCode: event.target.value
                      })
                    }
                  />
                  <Form.Input
                    width="ten"
                    name="residence"
                    fluid
                    required
                    label="Place of Residence"
                    placeholder="Place of Residence"
                    value={this.state.residence}
                    onChange={event =>
                      this.setState({ residence: event.target.value })
                    }
                  />
                </Form.Group>
                <Container
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <Button>Save</Button>
                </Container>
              </Form>
            ) : null}
          </Container>
        </Segment>
        {/* </Layout> */}
      </div>
    );
  }
}

import React, { Component } from "react";
import {
  Icon,
  Container,
  Table,
  Header,
  List,
  Grid,
  Button,
  Segment,
  Form,
  Message,
  Card,
  Image,
  Modal
} from "semantic-ui-react";
import Layout from "../components/Layout";
// import getCurrentUser from "../utils/UserUtils";
import axios from "axios";

export default class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      usrs: [],
      test: "",
      isChosen: false,
      isPromoted: false,
      isComp: "",
      inEdit: false,
      isAdmin: false
    };
    //this.currentUser = getCurrentUser();
    this.makeAdmin = e => this._makeAdmin();
    this.toEdit = this.toEdit.bind(this);
    this.backEdit = this.backEdit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidMount() {
    setInterval(async() => {
      try {
        const response = await axios.post(window.location.origin + "/userlist");
        if (response.data.success) {
          this.setState({ users: response.data.userData });
        }
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  }

  async selectUser(member, e, dimmer) {
    let currentUser = member.username;
    try {
      const response = await axios.post(window.location.origin + "/usrs", {
        currentUser
      });
      if (response.data.success) {
        this.setState({
          usrs: response.data.userData,
          isComp: response.data.isComp,
          img1: response.data.pic1,
          img2: response.data.pic2,
          doc1: response.data.doc1,
          doc2: response.data.doc2
        });
      }
    } catch (error) {
      console.log(error);
    }
    this.setState({ dimmer, open: true, isChosen: true });
  }

  async _makeAdmin() {
    let currentUser = this.state.usrs[0].username;
    try {
      const response = await axios.post(window.location.origin + "/makeadmin", {
        currentUser
      });
      if (response.data.success) {
        this.setState({ successMessage: response.data.message, isAdmin: true });
        console.log(this.state.successMessage);
      }
    } catch (error) {
      console.log(error);
    }
    this.setState({ isPromoted: true });
  }

  toEdit() {
    this.setState({ inEdit: "true" });
  }

  backEdit() {
    this.setState({ inEdit: "false" });
  }

  closeModal() {
    this.setState({ open: false });
  }

  //TODO: Create UserProfile component with default template
  render() {
    const { open, dimmer } = this.state;
    return (
      <div>
        {/* <Layout> */}
        <Segment style={{ marginLeft: "-234px", width: "1118px" }}>
          {/* <Header
              as="h1"
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: "#2985d0"
              }}
            >
              List of all Users
            </Header> */}
          {/* <Container > */}
          {this.state.users.map(member => (
            <Card
              raised
              style={{
                height: "400x",
                width: "180px",
                display: "inline-block",
                margin: "18px"
              }}
            >
              {/* <Image src="../static/profile Icon.png" /> */}
              <Card.Content>
                <Card.Header>
                  {member.username}{" "}
                  {member.isRegistered == "yes" ? (
                    <Icon name="checkmark" color="green" style={{float: "right"}}/>
                  ) : (
                    <Icon name="x" color="red" style={{float: "right"}}/>
                  )}
                </Card.Header>
                <Card.Meta>
                  <span className="date">Last Modified: 11.12.18</span>
                </Card.Meta>
                <Card.Description>
                  {member.lname}, {member.fname}
                </Card.Description>
              </Card.Content>
              <Card.Content extra style={{ textAlign: "center" }}>
                <Button onClick={this.selectUser.bind(this, member)}>
                  View Profile
                </Button>
              </Card.Content>
            </Card>
          ))}
          {/* </Container> */}
          {this.state.isChosen ? (
            <Modal dimmer={dimmer} open={open} onClose={this.closeModal}>
              <Modal.Header>
                Profile of {this.state.usrs[0].username}
              </Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  <Header>Approval</Header>
                  <Form>
                    <Form.Group widths="equal">
                      <Form.Input
                        readOnly
                        fluid
                        label="Username"
                        value={this.state.usrs[0].username}
                      />
                      <Form.Input
                        readOnly
                        fluid
                        label="ID"
                        value={this.state.usrs[0].id}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        readOnly
                        fluid
                        label="First Name"
                        value={this.state.usrs[0].fname}
                      />
                      <Form.Input
                        readOnly
                        fluid
                        label="Last Name"
                        value={this.state.usrs[0].lname}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Input
                        readOnly
                        width="eleven"
                        fluid
                        label="Street"
                        value={this.state.usrs[0].street}
                      />
                      <Form.Input
                        readOnly
                        width="five"
                        type="number"
                        fluid
                        label="House Number"
                        value={this.state.usrs[0].houseNr}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Input
                        readOnly
                        width="six"
                        fluid
                        type="number"
                        label="Postal Code"
                        value={this.state.usrs[0].postCode}
                      />
                      <Form.Input
                        readOnly
                        width="ten"
                        fluid
                        label="Place of Residence"
                        value={this.state.usrs[0].placeOfRes}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        readOnly
                        fluid
                        label="Date of Birth"
                        value={this.state.usrs[0].dateOfBirth}
                      />
                      <Form.Input
                        readOnly
                        fluid
                        label="Nationality"
                        value={this.state.usrs[0].nat}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        readOnly
                        fluid
                        label="Email"
                        type="email"
                        value={this.state.usrs[0].email}
                      />
                      <Form.Input
                        readOnly
                        fluid
                        label="Mobile Number"
                        type="number"
                        value={this.state.usrs[0].mobNr}
                      />
                    </Form.Group>
                    <Form.Group widths="equal" style={{ margin: "0px auto" }}>
                      {/* <Grid width={16}>
                        <Grid.Column> */}
                          <a
                            href={`../static/${this.state.img1}`}
                            target="_blank"  
                            style={{width: "50%"}}                          
                          >
                            <img
                              className="img-responsive"
                              src={`../static/${this.state.img1}`}
                              style={{
                                width: "200px",
                                height: "113px",
                                // float: "left"
                              }}
                            />
                          </a>
                        {/* </Grid.Column>
                        <Grid.Column> */}
                          <a
                            href={`../static/${this.state.img1}`}
                            target="_blank"
                          >
                            <img
                              className="img-responsive"
                              src={`../static/${this.state.img2}`}
                              style={{
                                width: "200px",
                                height: "113px",
                                // float: "right"
                              }}
                            />
                          </a>
                        {/* </Grid.Column> */}
                      {/* </Grid> */}
                    </Form.Group>
                    {this.state.usrs[0].isComp == "1" ? (
                      <div>
                        <Form.Group style={{ marginTop: "10px" }}>
                          <Form.Input
                            readOnly
                            width="sixteen"
                            fluid
                            label="Company Name"
                            value={this.state.usrs[0].compName}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Input
                            readOnly
                            width="eleven"
                            fluid
                            label="Business Address"
                            value={this.state.usrs[0].businessAd}
                          />
                          <Form.Input
                            readOnly
                            width="five"
                            fluid
                            label="House Number"
                            value={this.state.usrs[0].compHouseNr}
                          />
                        </Form.Group>
                        <Form.Group widths="equal">
                          <Form.Input
                            readOnly
                            width="six"
                            fluid
                            label="Postal Code"
                            value={this.state.usrs[0].compPostCode}
                          />
                          <Form.Input
                            readOnly
                            width="ten"
                            fluid
                            label="Place of Residenz"
                            value={this.state.usrs[0].residence}
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
                  </Form>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Container
                  style={{ textAlign: "center", display: "inline-block" }}
                >
                  <Button color="black" onClick={this.closeModal}>
                    Close
                  </Button>
                </Container>
              </Modal.Actions>
            </Modal>
          ) : null}
        </Segment>
        {/* </Layout> */}
      </div>
    );
  }
}

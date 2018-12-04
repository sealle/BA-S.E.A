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
  Message
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
    };
    //this.currentUser = getCurrentUser();
    this.makeAdmin = e => this._makeAdmin();
    this.toEdit = this.toEdit.bind(this);
    this.backEdit = this.backEdit.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await axios.post(window.location.origin + "/userlist");
      if (response.data.success) {
        this.setState({ users: response.data.userData });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async selectUser(member, e) {
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
    this.setState({ isChosen: true });
  }

  async _makeAdmin() {
    let currentUser = this.state.usrs[0].username;
    try {
      const response = await axios.post(window.location.origin + "/makeadmin", {
        currentUser
      });
      if (response.data.success) {
        this.setState({ successMessage: response.data.message });
        console.log(this.state.successMessage);
      }
    } catch (error) {
      console.log(error);
    }
    this.setState({ isPromoted: true });
  }

  toEdit() {
    this.setState({inEdit: "true"})
  }

  backEdit() {
    this.setState({inEdit: "false"})
  }

  //TODO: Create UserProfile component with default template
  render() {
    return (
      <div>
        <Layout>
          <Segment
            style={{ marginTop: "50px", marginLeft: "-126px", width: "900px" }}
          >
            <Header
              as="h1"
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: "#2985d0"
              }}
            >
              List of all Users
            </Header>
            <Container style={{ marginTop: "10px" }}>
              <Grid>
                <Grid.Column width={4} style={{ marginTop: "12px" }}>
                  <List divided relaxed>
                    {this.state.users.map(member => (
                      <List.Item
                        key={member.id}
                        onClick={this.selectUser.bind(this, member)}
                      >
                        <Icon name="user" size="large" style={{paddingTop: "5px"}} />
                        <List.Content>
                          <List.Header as="a">{member.username}</List.Header>
                          <List.Description as="a">
                            {member.lname},{" "} {member.fname}
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    ))}
                  </List>
                </Grid.Column>
                <Grid.Column width={12}>
                  {this.state.isChosen ? (
                    <div>
                      <Layout>
                        <Container style={{ marginTop: "10px" }}>
                          <Header
                            as="h3"
                            block
                            style={{ backgroundColor: "#d9edf7" }}
                          >
                            <Icon
                              name="user"
                              size="big"
                              style={{ align: "left" }}
                            />
                            {this.state.usrs[0].lname},{" "}
                            {this.state.usrs[0].fname}
                          </Header>
                          {this.state.inEdit === false ?
                          <Table>
                            <Table.Body>
                              <Table.Row>
                                <Table.Cell>
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      display: "inline-block",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    Username:
                                  </p>
                                  {this.state.usrs[0].username}
                                  </Table.Cell>
                                <Table.Cell>
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      display: "inline-block",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    ID:
                                  </p>
                                  {this.state.usrs[0].id}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      display: "inline-block",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    Street:
                                  </p>
                                  {this.state.usrs[0].street}
                                </Table.Cell>
                                <Table.Cell>
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      display: "inline-block",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    House Nr:
                                  </p>
                                  {this.state.usrs[0].houseNr}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      display: "inline-block",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    Postal Code:
                                  </p>
                                  {this.state.usrs[0].postCode}
                                </Table.Cell>
                                <Table.Cell>
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      display: "inline-block",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    Residence:
                                  </p>
                                  {this.state.usrs[0].placeOfRes}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      display: "inline-block",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    Birthday:
                                  </p>
                                  {this.state.usrs[0].dateOfBirth}
                                </Table.Cell>
                                <Table.Cell>
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      display: "inline-block",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    Nationality:
                                  </p>
                                  {this.state.usrs[0].nat}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      display: "inline-block",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    Email:
                                  </p>
                                  {this.state.usrs[0].email}
                                </Table.Cell>
                                <Table.Cell>
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      display: "inline-block",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    Mobile Nr:
                                  </p>
                                  {this.state.usrs[0].mobNr}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      display: "inline-block",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    Role:
                                  </p>
                                  {this.state.usrs[0].privileges}
                                </Table.Cell>
                                <Table.Cell>
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      display: "inline-block",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    is Registered:
                                  </p>
                                  {this.state.usrs[0].isRegistered}
                                </Table.Cell>
                              </Table.Row>
                              {/* <Table.Row>
                                <Table.Cell colSpan={2}>
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      display: "inline-block",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    Hash:
                                  </p>
                                  {this.state.usrs[0].hash}
                                </Table.Cell>
                              </Table.Row> */}
                              <Table.Row>
                                <Table.Cell colSpan={2}>
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      display: "inline-block",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    Registration Date:
                                  </p>
                                  {this.state.usrs[0].regDate}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell colSpan={2}>
                                  {this.state.usrs[0].privileges == "user" &&
                                  this.state.usrs[0].isRegistered == "yes" ? (
                                    <Button
                                      primary
                                      onClick={this.makeAdmin}
                                      fluid
                                    >
                                      Make Admin
                                    </Button>
                                  ) : (
                                    <Button primary disabled fluid>
                                      Make Admin
                                    </Button>
                                  )}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell colSpan={2}>
                                  <Button 
                                    primary 
                                    fluid 
                                    onClick={()=> {this.setState({inEdit: true})}}>
                                  Edit
                                  </Button>
                                </Table.Cell>
                              </Table.Row>
                            </Table.Body>
                          </Table>
                          : <Form onSubmit={this.handleSubmit} error={this.state.errorMessage}>
                          <Button primary style={{backgroundColor: "white", marginLeft:"92%", width: "10px"}} onClick={()=> {this.setState({inEdit: false})}}>
                          <Icon name="close" size="large" color="blue"></Icon>
                          </Button>
                          <Form.Group widths="equal">
                            <Form.Input
                              fluid
                              label="Username"
                              placeholder={this.state.usrs[0].username}
                              name="username"
                            />
                            <Form.Input
                              fluid
                              label="ID"
                              placeholder={this.state.usrs[0].id}
                            />
                          </Form.Group>
                          <Form.Group widths="equal">
                            <Form.Input
                              fluid
                              label="First Name"
                              placeholder={this.state.usrs[0].fname}
                              name="fname"
                            />
                            <Form.Input
                              fluid
                              label="Last Name"
                              placeholder={this.state.usrs[0].lname}
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
                              placeholder={this.state.usrs[0].street}
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
                              placeholder={this.state.usrs[0].houseNr}
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
                              placeholder={this.state.usrs[0].postCode}
                              name="postCode"
                              value={this.state.postCode}
                              onChange={event =>
                                this.setState({ postCode: event.target.value })
                              }
                            />
                            <Form.Input
                              width="ten"
                              fluid
                              label="Place of Residence"
                              placeholder={this.state.usrs[0].placeOfRes}
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
                              placeholder={this.state.usrs[0].dateOfBirth}
                            />
                            <Form.Input
                              fluid
                              label="Nationality"
                              placeholder={this.state.usrs[0].nat}
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
                              placeholder={this.state.usrs[0].email}
                              name="email"
                              value={this.state.email}
                              onChange={event => this.setState({ email: event.target.value })}
                            />
                            <Form.Input
                              fluid
                              label="Mobile Number"
                              type="number"
                              placeholder={this.state.usrs[0].mobNr}
                              name="mobNr"
                              value={this.state.mobNr}
                              onChange={event => this.setState({ mobNr: event.target.value })}
                            />
                          </Form.Group>
                            </Form> }
                          {this.state.inEdit === false ? 
                          <Grid>
                            <Grid.Column width={8}>
                              <img
                                className="img-responsive"
                                src={`../static/${this.state.img1}`}
                                style={{
                                  width: "200px",
                                  height: "113px",
                                  float: "left"
                                }}
                              />
                            </Grid.Column>
                            <Grid.Column width={8}>
                              <img
                                className="img-responsive"
                                src={`../static/${this.state.img2}`}
                                style={{
                                  width: "200px",
                                  height: "113px",
                                  float: "right"
                                }}
                              />
                            </Grid.Column>
                          </Grid> : null }

                          {this.state.isComp === 1 ? (
                            <Table>
                              <Table.Body>
                                <Table.Row>
                                  <Table.Cell>
                                    <p
                                      style={{
                                        fontWeight: "bold",
                                        display: "inline-block",
                                        paddingRight: "10px"
                                      }}
                                    >
                                      Company Name:
                                    </p>
                                    {this.state.usrs[0].compName}
                                  </Table.Cell>
                                  <Table.Cell>
                                    <p
                                      style={{
                                        fontWeight: "bold",
                                        display: "inline-block",
                                        paddingRight: "10px"
                                      }}
                                    >
                                      Registration Number:
                                    </p>
                                    {this.state.usrs[0].regNr}
                                  </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                  <Table.Cell>
                                    <p
                                      style={{
                                        fontWeight: "bold",
                                        display: "inline-block",
                                        paddingRight: "10px"
                                      }}
                                    >
                                      Place of Registration:
                                    </p>
                                    {this.state.usrs[0].placeOfReg}
                                  </Table.Cell>
                                  <Table.Cell>
                                    <p
                                      style={{
                                        fontWeight: "bold",
                                        display: "inline-block",
                                        paddingRight: "10px"
                                      }}
                                    >
                                      Residence:
                                    </p>
                                    {this.state.usrs[0].residence}
                                  </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                  <Table.Cell>
                                    <p
                                      style={{
                                        fontWeight: "bold",
                                        display: "inline-block",
                                        paddingRight: "10px"
                                      }}
                                    >
                                      Business Address:
                                    </p>
                                    {this.state.usrs[0].businessAd}
                                  </Table.Cell>
                                  <Table.Cell>
                                    <p
                                      style={{
                                        fontWeight: "bold",
                                        display: "inline-block",
                                        paddingRight: "10px"
                                      }}
                                    >
                                      House Nr:
                                    </p>
                                    {this.state.usrs[0].compHouseNr}
                                  </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                  <Table.Cell colSpan={2}>
                                    <a
                                      href={`../static/${this.state.doc1}`}
                                      type="application/pdf"
                                      target="_blank"
                                    >
                                      View extract of the relevant registration authority
                                    </a>
                                  </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                  <Table.Cell colSpan={2}>
                                    <a
                                      href={`../static/${this.state.doc2}`}
                                      type="application/pdf"
                                      target="_blank"
                                    >
                                      View electronic copy of the power of attorney
                                    </a>
                                  </Table.Cell>
                                </Table.Row>
                              </Table.Body>
                            </Table>
                          ) : null}
                        </Container>
                      </Layout>
                    </div>
                  ) : null}
                </Grid.Column>
              </Grid>
            </Container>
          </Segment>
        </Layout>
      </div>
    );
  }
}

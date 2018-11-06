import React, { Component } from "react";
import {
  Icon,
  Container,
  Table,
  Header,
  List,
  Grid,
  Button,
  Segment
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
      isComp: ""
    };
    //this.currentUser = getCurrentUser();
    this.makeAdmin = e => this._makeAdmin();
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
                        <Icon name="user" size="large" verticalAlign="middle" />
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
                            </Table.Body>
                          </Table>
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
                          </Grid>

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
                                      View excerpt of commercial register
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
                                      View provisions regulating the power to
                                      bind the legal entity
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

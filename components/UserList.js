import React, { Component } from "react";
import {
  Icon,
  Container,
  Table,
  Header,
  List,
  Grid,
  Button
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
          <Header as="h1" style={{ textAlign: "center", marginTop: "30px" }}>
            List of all Users
          </Header>
          <Container style={{ marginTop: "10px" }}>
            <Grid>
              <Grid.Column width={4} style={{ marginTop: "12px" }}>
                <List>
                  {this.state.users.map(member => (
                    <List.Item key={member.id}>
                      <Icon name="user" size="small" />
                      <List.Content>
                        <List.Header
                          as="a"
                          onClick={this.selectUser.bind(this, member)}
                        >
                          {member.username}
                        </List.Header>
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
                          {this.state.usrs[0].lname}, {this.state.usrs[0].fname}
                        </Header>
                        <Table>
                          <Table.Body>
                            <Table.Row>
                              <Table.Cell>
                                Username: {this.state.usrs[0].username}
                              </Table.Cell>
                              <Table.Cell>
                                ID: {this.state.usrs[0].id}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                Street: {this.state.usrs[0].street}
                              </Table.Cell>
                              <Table.Cell>
                                House Nr: {this.state.usrs[0].houseNr}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                Postal Code: {this.state.usrs[0].postCode}
                              </Table.Cell>
                              <Table.Cell>
                                Residence: {this.state.usrs[0].placeOfRes}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                Birthday: {this.state.usrs[0].dateOfBirth}
                              </Table.Cell>
                              <Table.Cell>
                                Nationality: {this.state.usrs[0].nat}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                Email: {this.state.usrs[0].email}
                              </Table.Cell>
                              <Table.Cell>
                                Mobile Number: {this.state.usrs[0].mobNr}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                Role: {this.state.usrs[0].privileges}
                              </Table.Cell>
                              <Table.Cell>
                                {this.state.usrs[0].privileges == "user" &&
                                this.state.usrs[0].isRegistered == "yes" ? (
                                  <Button primary onClick={this.makeAdmin}>
                                    Make Admin
                                  </Button>
                                ) : (
                                  <Button primary disabled>
                                    Make Admin
                                  </Button>
                                )}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                isRegistered: {this.state.usrs[0].isRegistered}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell colSpan={2}>
                                Hash: {this.state.usrs[0].hash}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell colSpan={2}>
                                Registration Date: {this.state.usrs[0].regDate}
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
                                  Company Name: {this.state.usrs[0].compName}
                                </Table.Cell>
                                <Table.Cell>
                                  Registration Number:{" "}
                                  {this.state.usrs[0].regNr}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  Place of registration:{" "}
                                  {this.state.usrs[0].placeOfReg}
                                </Table.Cell>
                                <Table.Cell>
                                  Residence: {this.state.usrs[0].residence}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  Business Address:{" "}
                                  {this.state.usrs[0].businessAd}
                                </Table.Cell>
                                <Table.Cell>
                                  House Nr: {this.state.usrs[0].compHouseNr}
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  <a
                                    href={`../static/${this.state.doc1}`}
                                    type="application/pdf"
                                    target="_blank"
                                  >
                                    View excerpt of commercial register
                                  </a>
                                </Table.Cell>
                                <Table.Cell>
                                  <a
                                    href={`../static/${this.state.doc2}`}
                                    type="application/pdf"
                                    target="_blank"
                                  >
                                    View Provisions regulating the power to bind
                                    the legal entity
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
        </Layout>
      </div>
    );
  }
}

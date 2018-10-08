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
import fetch from "isomorphic-unfetch";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import getCurrentUser from "../utils/UserUtils";
import axios from "axios";

export default class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      usrs: [],
      test: "",
      isChosen: false,
      isPromoted: false
    };
    this.currentUser = getCurrentUser();
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
      const response = await axios.post(window.location.origin + "/users", {
        currentUser
      });
      if (response.data.success) {
        this.setState({ usrs: response.data.userData });
        this.setState({ img1: response.data.pic1 });
        this.setState({ img2: response.data.pic2 });
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
              <Grid.Column width={4}>
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
                          {this.state.usrs[0].lname},{this.state.usrs[0].fname}
                          {/*TODO: Make it work! :)*/}
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
                                First Name: {this.state.usrs[0].fname}
                              </Table.Cell>
                              <Table.Cell>
                                Last Name: {this.state.usrs[0].lname}
                              </Table.Cell>
                            </Table.Row>
                          </Table.Body>
                        </Table>
                        <img
                          className="img-responsive"
                          src={`../static/${this.state.img1}`}
                          style={{
                            width: "200px",
                            height: "113px",
                            float: "left"
                          }}
                        />
                        <img
                          className="img-responsive"
                          src={`../static/${this.state.img2}`}
                          style={{
                            width: "200px",
                            height: "113px",
                            float: "right"
                          }}
                        />
                      </Container>
                      <Button primary onClick={this.makeAdmin}>
                        Make Admin
                      </Button>{" "}
                      {/*TODO: disable button when user is already admin*/}
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

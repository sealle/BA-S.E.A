import React, { Component } from "react";
import { Icon, Container, Table, Header } from "semantic-ui-react";
import fetch from "isomorphic-unfetch";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "../components/Layout";
import getCurrentUser from "../utils/UserUtils";
import axios from "axios";
import withImages from "../next.config";

export default class UserData extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    this.currentUser = getCurrentUser();
  }

  async componentDidMount() {
    let currentUser = this.currentUser;
    try {
      const response = await axios.post(window.location.origin + "/users", {
        currentUser
      });
      if (response.data.success) {
        this.setState({ users: response.data.userData });
        this.setState({ img1: response.data.pic1 });
        this.setState({ img2: response.data.pic2 });
      }
    } catch (error) {
      console.log(error);
    }
  }

  //TODO: Create UserProfile component with default template
  render() {
    return (
      <div>
        <ProfileHeader />
        <Layout>
          <Header as="h1" style={{ textAlign: "center", marginTop: "60px" }}>
            Your Profile
          </Header>
          <Container style={{ marginTop: "10px" }}>
            <Header as="h3" block style={{ backgroundColor: "#d9edf7" }}>
              <Icon name="user" size="big" style={{ align: "left" }} />
              {this.state.users[0].lname}, {this.state.users[0].fname}
              {/*TODO: Make it work! :)*/}
            </Header>
            <Table>
              <Table.Body>
                {this.state.users.map(member => (
                  <Table.Row key={member.id}>
                    <Table.Cell>Username: {member.username}</Table.Cell>
                    <Table.Cell>ID: {member.id}</Table.Cell>
                  </Table.Row>
                ))}
                {this.state.users.map(member => (
                  <Table.Row key={member.id} widths="equal">
                    <Table.Cell>First Name: {member.fname}</Table.Cell>
                    <Table.Cell>Last Name: {member.lname}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <img
              className="img-responsive"
              src={`../static/${this.state.img1}`}
              style={{ width: "200px", height: "113px", float: "left" }}
            />
            <img
              className="img-responsive"
              src={`../static/${this.state.img2}`}
              style={{ width: "200px", height: "113px", float: "right" }}
            />
          </Container>
        </Layout>
      </div>
    );
  }
}

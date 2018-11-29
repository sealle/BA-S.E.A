import React, { Component } from "react";
import {
  Icon,
  Container,
  Table,
  Header,
  Grid,
  Segment
} from "semantic-ui-react";
import Layout from "../components/Layout";
import axios from "axios";

export default class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isComp: "",
      fileURL: ""
    };
  }

  async componentDidMount() {
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
    } catch (error) {
      console.log(error);
    }
  }

  //TODO: Create UserProfile component with default template
  render() {
    return (
      <div>
        <Layout>
          <Segment style={{ marginTop: "50px" }}>
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
              {this.state.users.map(member => (
                <Header
                  as="h3"
                  block
                  style={{ backgroundColor: "#d9edf7" }}
                  key={member.id}
                >
                  <Icon name="user" size="big" style={{ align: "left" }} />
                  {member.lname}, {member.fname}
                </Header>
              ))}
              <Table>
                {this.state.users.map(member => (
                  <Table.Body key={member.id}>
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
                        {member.username}
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
                        {member.id}
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
                        {member.street}
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
                        {member.houseNr}
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
                        {member.postCode}
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
                        {member.placeOfRes}
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
                        {member.dateOfBirth}
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
                        {member.nat}
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
                        {member.email}
                      </Table.Cell>
                      <Table.Cell>
                        <p
                          style={{
                            fontWeight: "bold",
                            display: "inline-block",
                            paddingRight: "10px"
                          }}
                        >
                          Mobile Number:
                        </p>
                        {member.mobNr}
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
                        {member.privileges}
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
                        {member.isRegistered}
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
                        {member.hash}
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
                        {member.regDate}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                ))}
              </Table>
              <Grid>
                <Grid.Column width={8}>
                  <img
                    className="img-responsive"
                    src={`../static/${this.state.img1}`}
                    style={{ width: "200px", height: "113px", float: "left" }}
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <img
                    className="img-responsive"
                    src={`../static/${this.state.img2}`}
                    style={{ width: "200px", height: "113px", float: "right" }}
                  />
                </Grid.Column>
              </Grid>
              {this.state.isComp === 1 ? (
                <Table>
                  {this.state.users.map(member => (
                    <Table.Body key={member.id}>
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
                          {member.compName}
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
                          {member.regNr}
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
                            Place of registration:
                          </p>
                          {member.placeOfReg}
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
                          {member.residence}
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
                          {member.businessAd}
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
                          {member.compHouseNr}
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
                            View copy of the power of attorney
                          </a>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ))}
                </Table>
              ) : null}
            </Container>
          </Segment>
        </Layout>
      </div>
    );
  }
}

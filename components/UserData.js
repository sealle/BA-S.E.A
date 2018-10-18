import React, { Component } from "react";
import { Icon, Container, Table, Header, Grid } from "semantic-ui-react";
import Layout from "../components/Layout";
import axios from "axios";

export default class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isComp: ""
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
          <Header as="h1" style={{ textAlign: "center", marginTop: "30px" }}>
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
                    <Table.Cell>Username: {member.username}</Table.Cell>
                    <Table.Cell>ID: {member.id}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>street: {member.street}</Table.Cell>
                    <Table.Cell>House Nr: {member.houseNr}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Postal Code: {member.postCode}</Table.Cell>
                    <Table.Cell>Residence: {member.placeOfRes}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Birthday: {member.dateOfBirth}</Table.Cell>
                    <Table.Cell>Nationality: {member.nat}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Email: {member.email}</Table.Cell>
                    <Table.Cell>Mobile Number: {member.mobNr}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Role: {member.privileges}</Table.Cell>
                    <Table.Cell>isRegistered: {member.isRegistered}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Hash: {member.hash}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Registration Date: {member.regDate}</Table.Cell>
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
                      <Table.Cell>Company Name: {member.compName}</Table.Cell>
                      <Table.Cell>
                        Registration Number: {member.regNr}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        Place of registration: {member.placeOfReg}
                      </Table.Cell>
                      <Table.Cell>Residence: {member.residence}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        Business Address: {member.businessAd}
                      </Table.Cell>
                      <Table.Cell>House Nr: {member.compHouseNr}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <a
                          href={`../static/${this.state.doc1}`}
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
                          View Provisions regulating the power to bind the legal
                          entity
                        </a>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                ))}
              </Table>
            ) : null}
          </Container>
        </Layout>
      </div>
    );
  }
}

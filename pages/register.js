import React, { Component } from "react";
import { Menu, Container, Header, Segment, Icon } from "semantic-ui-react";
import CompanyRegister from "../components/CompanyRegister";
import PersonRegister from "../components/PersonRegister";
import HomeHeader from "../components/HomeHeader";
import Layout from "../components/Layout";

export default class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: "person"
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        {/* <HomeHeader /> */}
        <Layout>
          <Segment
            style={{
              // backgroundColor: "#2985d0",
              marginTop: "50px"
            }}
          >
            <br />
            <Header as="h1" textAlign="center" style={{ color: "#2985d0" }}>
              Registration
            </Header>
            <Menu pointing secondary>
              <Menu.Item
                name="person"
                active={activeItem === "person"}
                onClick={this.handleItemClick}
                style={{ color: "#2985d0" }}
              >
                <Icon name="user" />
                Person
              </Menu.Item>
              <Menu.Item
                name="company"
                active={activeItem === "company"}
                onClick={this.handleItemClick}
                style={{ color: "#2985d0" }}
              >
                <Icon name="globe" />
                Company
              </Menu.Item>
              <Menu.Item
                icon
                position="right"
                href="/login"
                name="Back to login"
                style={{ color: "#2985d0" }}
              >
                <Icon name="arrow left" />
                Back to Login
              </Menu.Item>
            </Menu>
            {this.state.activeItem === "person" ? <PersonRegister /> : null}
            {this.state.activeItem === "company" ? <CompanyRegister /> : null}
          </Segment>
        </Layout>
      </div>
    );
  }
}

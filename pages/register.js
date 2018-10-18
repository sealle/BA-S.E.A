import React, { Component } from "react";
import { Menu, Container, Header } from "semantic-ui-react";
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
        <HomeHeader />
        <Layout>
          <Header as="h1" textAlign="center" style={{ marginTop: 60 }}>
            Registration
          </Header>
          <Menu pointing>
            <Menu.Item
              name="person"
              active={activeItem === "person"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="company"
              active={activeItem === "company"}
              onClick={this.handleItemClick}
            />
          </Menu>
          {this.state.activeItem === "person" ? <PersonRegister /> : null}
          {this.state.activeItem === "company" ? <CompanyRegister /> : null}
        </Layout>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link, Router } from "../routes";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Icon,
  Segment,
  Dimmer,
  Loader,
  Image
} from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import axios from "axios";

class Terms extends Component {
  constructor() {
    super();
    this.state = {
      moreThanTwo: "",
      loading: false,
      allClicked: false,
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      countMembers: ""
    };
    this.getMembersCount();
    this.toVideo = this.toVideo.bind(this);
    this.handleCheck1 = this.handleCheck1.bind(this);
    this.handleCheck2 = this.handleCheck2.bind(this);
    this.handleCheck3 = this.handleCheck3.bind(this);
    this.handleCheck4 = this.handleCheck4.bind(this);
    this.handleCheck5 = this.handleCheck5.bind(this);
  }

  async getMembersCount() {
    // const response = await axios.post(
    //   window.location.origin + "/pusher/members"
    // );
    // if (response.data.success) {
    //   this.setState({ countMembers: response.data.newConnect });
    //   console.log(this.state.countMembers);
    // }
    // // if (this.state.countMembers == "2") {
    // //   swal("Attention", "Admin is occupied, please wait...", "warning");
    // //   this.setState({ loading: true });
    // // } else {
    // //   this.setState({ loading: false });
    // // }
  }

  handleCheck1() {
    this.setState({ checked1: !this.state.checked1 });
  }

  handleCheck2() {
    this.setState({ checked2: !this.state.checked2 });
  }

  handleCheck3() {
    this.setState({ checked3: !this.state.checked3 });
  }

  handleCheck4() {
    this.setState({ checked4: !this.state.checked4 });
  }

  handleCheck5() {
    this.setState({ checked5: !this.state.checked5 });
  }

  toVideo() {
    // if (this.state.countMembers !== undefined) {
    //   // swal("Attention", "Admin is occupied, please wait...", "warning");
    //   this.setState({ loading: true });
    // } else {
    this.setState({ loading: false });
    Router.push("/videochat");
    // }
  }

  render() {
    return (
      <div>
        {/* <ProfileHeader /> */}
        <Layout>
          {/* <p>{this.state.moreThanTwo}</p> */}
          <style>{`
        body {
          background: #e6e6e6;
        }
      `}</style>
          <Segment style={{ marginTop: "50px" }}>
            <Dimmer active={this.state.loading}>
              <Loader>Admin is in a Call...</Loader>
            </Dimmer>
            <br />
            <Header
              as="h1"
              textAlign="center"
              style={{ color: "#2985d0", marginTop: "10px" }}
            >
              Terms and Conditions
            </Header>
            <Header as="h3" textAlign="center" style={{ marginBottom: 20 }}>
              Make sure you accept all terms and conditions
            </Header>
            <Container textAlign="center">
              {/* <p>aklshdflakjsdhfkahsdf</p> */}
              <Checkbox
                label="I confirm to have my identity card ready"
                required
                checked={this.state.checked1}
                onChange={this.handleCheck1}
              />
              {this.state.checked1 ? (
                <Icon
                  name="check circle"
                  color="green"
                  size="large"
                  style={{ float: "right" }}
                />
              ) : null}
              <Divider />
              {/* <p>aksjdgfljhasdfsdfljasldkjhf</p> */}
              <Checkbox
                label="I agree that the audio line is beeing recorded"
                required
                checked={this.state.checked2}
                onChange={this.handleCheck2}
              />
              {this.state.checked2 ? (
                <Icon
                  name="check circle"
                  color="green"
                  size="large"
                  style={{ float: "right" }}
                />
              ) : null}
              <Divider />
              {/* <p>aksjdgfljhasdfsdfljasldkjhf</p> */}
              <Checkbox
                label="I confirm that I have a good internet connection"
                required
                checked={this.state.checked3}
                onChange={this.handleCheck3}
              />
              {this.state.checked3 ? (
                <Icon
                  name="check circle"
                  color="green"
                  size="large"
                  style={{ float: "right" }}
                />
              ) : null}
              <Divider />
              <Checkbox
                label="I confirm that I am in a silent environment"
                required
                checked={this.state.checked4}
                onChange={this.handleCheck4}
              />
              {this.state.checked4 ? (
                <Icon
                  name="check circle"
                  color="green"
                  size="large"
                  style={{ float: "right" }}
                />
              ) : null}
              <Divider />
              <Checkbox
                label="I confirm that I have a good microphone (preferably headset)"
                required
                checked={this.state.checked5}
                onChange={this.handleCheck5}
              />
              {this.state.checked5 ? (
                <Icon
                  name="check circle"
                  color="green"
                  size="large"
                  style={{ float: "right" }}
                />
              ) : null}
              <Divider />
              {this.state.checked1 &&
              this.state.checked2 &&
              this.state.checked3 &&
              this.state.checked4 &&
              this.state.checked5 ? (
                <Button
                  primary
                  icon
                  labelPosition="right"
                  onClick={this.toVideo}
                >
                  Next
                  <Icon name="right arrow" />
                </Button>
              ) : (
                <Button primary icon labelPosition="right" disabled>
                  Next
                  <Icon name="right arrow" />
                </Button>
              )}
            </Container>
          </Segment>
        </Layout>
      </div>
    );
  }
}

export default Terms;

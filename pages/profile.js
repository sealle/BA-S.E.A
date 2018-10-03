import React, {Component} from 'react';
import {Link, Router} from '../routes';
import {Button, Table, Container, Divider, Icon, Form, Message} from 'semantic-ui-react';
import {Header} from "semantic-ui-react";
import Layout from '../components/Layout';
import axios from 'axios';
import {getCookie, setCookie} from "../utils/CookieUtils";
import ProfileHeader from '../components/ProfileHeader';
import jwtDecode from "jwt-decode";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        }
        this.testCSRF = (e) => this._testCSRF();
    }


    async _testCSRF () {
        const token = getCookie('x-access-token');
        const decoded = jwtDecode(token);
        try {
            const res = await axios.post(window.location.origin + '/api/preventCRSF', {
                example: 'data'
            }, {
                headers: {
                    'X-XSRF-TOKEN': decoded.xsrftoken
                }
            })
            if (res.data.success) {
                this.setState({
                    message: res.data.message,
                })
            }
        } catch (error) {
            this.setState({
                message: error.response.data.message
            })
        }
    }

    render() {
        return (
            <div>
                <ProfileHeader/>
                <Layout>
                    <Header as='h1' textAlign='center' style={{marginTop: 60}}>Hello</Header>
                    <Header as='h3' textAlign='center' style={{marginBottom: 20}}>you can view and edit your data here</Header>
                    <Container textAlign='center'>
                        <Button onClick={this.testCSRF}>Access API protected by CSFR</Button>
                        <span>{this.state.message}</span>
                        <Link route="/videochat">
                            <Button primary icon labelPosition="right">
                                Next
                                <Icon name="right arrow"/>
                            </Button>
                        </Link>
                    </Container>
                </Layout>
            </div>
        );
    }
}

export default Profile;

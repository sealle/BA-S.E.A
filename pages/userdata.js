import React, {Component} from 'react'
import {Menu, Segment, Icon, Button, Form, Container, Table, Header} from 'semantic-ui-react'
import {setCookie} from "../utils/CookieUtils";
import {Router, Link} from "../routes";
import fetch from 'isomorphic-unfetch';
import ProfileHeader from '../components/ProfileHeader';
import Layout from '../components/Layout';
import getCurrentUser from '../utils/UserUtils';

export default class UserData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.showDetails = this.showDetails.bind(this);
        this.currentUser = getCurrentUser();
    }

    showDetails() { //TODO: automate this search, but how?
        let self = this;
        let currentUser = this.currentUser;
        try {
            fetch('/users', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({currentUser})
            }).then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            }).then(function (data) {
                self.setState({users: data});
            }).catch(err => {
                console.log('caught it!', err);
            })
        } catch (error) {
            console.log(error);
        }
    }

    /*TODO: create a profile template*/
    render() {
        this.showDetails();
        return (
            <div>
                <ProfileHeader/>
                <Layout>
                    <Header as='h1' style={{textAlign: 'center', marginTop: '60px'}}>Your Profile</Header>
                    <Container style={{marginTop: '10px'}}>
                        {this.state.users.map(member =>
                        <Header as='h3' block style={{backgroundColor: '#d9edf7'}}>
                            <Icon name='user' size='big' style={{align: 'left'}}/>
                            {member.lname}, {member.fname}
                        </Header>
                        )}
                        <Table>
                            <Table.Body>
                                    {this.state.users.map(member =>
                                        <Table.Row>
                                            <Table.Cell>Username: {member.username}</Table.Cell>
                                            <Table.Cell>ID: {member.id}</Table.Cell>
                                            {/*<Table.Cell>Mobile Number: {member.mobNr}</Table.Cell>*/}
                                        </Table.Row>
                                    )}
                                {/*{this.state.users.map(member =>
                                        <Table.Row>
                                            <Table.Cell>Address: {member.street} {member.houseNr}</Table.Cell>
                                            <Table.Cell>Postal Code: {member.postCode}</Table.Cell>
                                            <Table.Cell>Place of Residence: {member.placeOfRes}</Table.Cell>
                                        </Table.Row>
                                    )}
                                    {this.state.users.map(member =>
                                        <Table.Row>
                                            <Table.Cell>Date of Birth: {member.DateOfBirth}</Table.Cell>
                                            <Table.Cell>Nationality: {member.nat}</Table.Cell>
                                        </Table.Row>
                                    )}*/}
                                {this.state.users.map(member =>
                                    <Table.Row>
                                        <Table.Cell>{member.ID1}</Table.Cell>
                                        <Table.Cell>{member.ID2}</Table.Cell>
                                    </Table.Row>
                                )}
                            </Table.Body>
                        </Table>
                    </Container>
                </Layout>
            </div>
        )
    }
}

/*<Table className="table table-hover">
    <thead>
    {this.state.users.map(member =>
        <tr>
            <th>{member.lname},</th>
            <th>{member.fname}</th>
        </tr>
    )}
    </thead>
    <tbody>
    {this.state.users.map(member =>
        <tr key={member.password}>
            <td>{member.username}</td>
            <td>{member.fname}</td>
            <td>{member.lname}</td>
            <td>{member.email}</td>
        </tr>
    )}
    </tbody>
</Table>*/

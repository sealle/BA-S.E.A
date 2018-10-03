import React, {Component} from 'react';
import ProfileHeader from '../components/ProfileHeader';
import Layout from '../components/Layout';

import VideoChat from "../components/VideoChat";

class VideoChatPage extends Component {
    render() {
        return (
            <div>
                <ProfileHeader/>
                <Layout>
                    <VideoChat/>
                </Layout>
            </div>
        )
    }

}

export default VideoChatPage;

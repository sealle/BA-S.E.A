import React, {Component} from 'react';
import MediaHandler from '../webrtc/MediaHandler';
import Pusher from 'pusher-js';
import Peer from 'simple-peer';

const APP_KEY = '0f924dcd44dc93a88aa7';
const wrtc = require('wrtc');
import getCurrentUser from '../utils/UserUtils';
import {getCookie} from "../utils/CookieUtils";
import jwtDecode from "jwt-decode";

export default class VideoChat extends Component {
    constructor() {
        super();

        this.state = {
            hasMedia: false,
            otherUserName: '',
        };

        const token = getCookie('x-access-token');
        const decoded = jwtDecode(token);

        this.userName = getCurrentUser();

        window.user = {
            name: this.userName
        };
        window.xsrftoken = decoded.xsrftoken;

        this.user = window.user;
        this.user.stream = null;
        this.peers = {};

        this.mediaHandler = new MediaHandler();
        this.setupPusher();

        this.callTo = this.callTo.bind(this);
        this.setupPusher = this.setupPusher.bind(this);
        this.startPeer = this.startPeer.bind(this);
    }

    componentWillMount() {
        this.mediaHandler.getPermissions()
            .then((stream) => {
                this.setState({hasMedia: true});
                this.user.stream = stream;

                try{
                    this.myVideo.srcObject = stream;
                } catch (e) {
                    this.myVideo.src = URL.createObjectURL(stream);
                    console.log(e);
                }

                this.myVideo.play();
            })
    }

    setupPusher() { //TODO: Pusher only one way: User->Admin
        //Pusher.logToConsole = true;
        this.pusher = new Pusher(APP_KEY, {
            authEndpoint: '/pusher/auth',
            cluster: 'eu',
            auth: {
                params: this.user.name,
                headers: {
                    'X-XSRF-Token': window.xsrfToken
                }
            }
        });

        this.channel = this.pusher.subscribe('presence-video-channel'); //presence: requires auth!

        this.channel.bind(`client-signal-${this.user.name}`, (signal) => {
            let peer = this.peers[signal.userName];

            // if peer is not already exists, we got an incoming call
            if (peer === undefined) {
                this.setState({otherUserName: signal.userName});
                peer = this.startPeer(signal.userName, false);
            }

            peer.signal(signal.data);
        });
        /*this.channel.bind('pusher:subscription_succeeded', function() {
            alert('successfully subscribed!');
        });*/
    }

    startPeer(userName, initiator = true, wrtc) { //TODO: initiator is always user!
        const peer = new Peer({
            initiator,
            stream: this.user.stream,
            trickle: false,
            wrtc: wrtc
        });

        peer.on('signal', (data) => {
            this.channel.trigger(`client-signal-${userName}`, {
                type: 'signal',
                userName: this.user.name,
                data: data
            });
        });

        peer.on('stream', (data)  => {

            /*this.userVideo.srcObject = data;
            let playPromise = this.userVideo.play();

            if(playPromise !== undefined) {
                playPromise.then(function() {
                    //automatic playback startet
                }).catch(function(err){
                    console.log(err);
                    return playPromise;

                })
            }*/

            if(this.userVideo !== undefined) {
                try {
                    this.userVideo.srcObject = data;
                } catch (e) {
                    this.userVideo.src = URL.createObjectURL(data);
                    console.log(e);
                }
                this.userVideo.play().catch((e) => {
                    if(e.code === DOMException.ABORT_ERR) {
                        console.log(e);
                    }
                });
                console.log(data);
            } else {
                console.log('something went wrong')
            }

        });

        peer.on('close', () => {
            let peer = this.peers[userName];
            if (peer !== undefined) {
                peer.destroy(err);
            }

            this.peers[userName] = undefined;
        });

        return peer;
    }

    callTo(userName) {
        this.peers[userName] = this.startPeer(userName);
    }


    render() {
        return (
            <div className="VideoChat" style={{textAlign: 'center'}}>
                <h1>VideoChat</h1>
                {['Admin'].map((userName) => {
                    return this.user.name !== userName ?
                        <button key={userName} onClick={() => this.callTo(userName)}>Call {userName}</button> : null;
                })}

                <div className="video-container" style={{
                    width: '500px',
                    height: '380px',
                    margin: '0px auto',
                    position: 'relative',
                    border: '6px solid #645cff'
                }}>
                    <video className="my-video" ref={(ref) => {
                        this.myVideo = ref;
                    }}
                           style={{
                               width: '130px',
                               position: 'absolute',
                               left: '10px',
                               bottom: '10px',
                               border: '6px solid #2196F3',
                               zIndex: '2'
                           }}>
                    </video>
                    <video className="user-video" ref={(ref) => {
                        this.userVideo = ref;
                    }}
                           style={{
                               position: 'absolute',
                               left: '0',
                               right: '0',
                               bottom: '0',
                               top: '0',
                               width: '100%',
                               height: '100%',
                               zIndex: '1'
                           }}>
                    </video>
                </div>
            </div>
        )
    }

}


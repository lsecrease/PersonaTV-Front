import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

import Playlist from './Playlist/';
import ChannelInfo from './ChannelInfo/';

const playlist_image = require('../../images/playlist_image.png');

@CSSModules(styles)
export default class Sidebar extends Component {
    render() {
        return (
            <div styleName='sidebar'>
                <Playlist image_url={playlist_image} />

                <ChannelInfo
                    number={101}
                    name='Robotic Science'
                    owner={{
                        url: '#',
                        name: 'Robo-Boogie'
                    }}
                    viewers={1011}
                    subscribers={36}
                    episode={{
                        provider: 'youtube',
                        name: 'Robotics Unlimited',
                        author: 'Kevin Brady'
                    }} />
            </div>
        );
    }
}
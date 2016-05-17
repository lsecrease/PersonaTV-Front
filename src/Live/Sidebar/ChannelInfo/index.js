import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

import EpisodeInfo from './EpisodeInfo/';

@CSSModules(styles)
export default class ChannelInfo extends Component {
    render() {
        const { number, name, owner, viewers, subscribers, episode } = this.props;

        return (
            <div styleName='container'>
                <div styleName='general'>
                    <div>Channel {number}</div>
                    <div>{name}</div>
                    <div styleName='channel_owner'>
                        by <a href={owner.url}>{owner.name}</a>
                    </div>
                </div>

                <div styleName='stats'>
                    <div styleName='viewers_subscribers'>
                        <div>{viewers} Currently Viewing</div>
                        <div>{subscribers} Channel Subscribers</div>
                    </div>

                    <EpisodeInfo
                        provider={episode.provider}
                        name={episode.name} 
                        author={episode.author} />
                </div>
            </div>
        );
    }
}
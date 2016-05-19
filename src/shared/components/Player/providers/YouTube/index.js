import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import jwplayer from 'jwplayer'; // eslint-disable

window.jwplayer.key = process.env.JWPLAYER_KEY;

jwplayer.defaults = {
    'aspectratio': '16:9',
    'autostart': true,
    'controls': true,
    'displaydescription': false,
    'displaytitle': false,
    'flashplayer': '//ssl.p.jwpcdn.com/player/v/7.4.2/jwplayer.flash.swf',
    'height': 270,
    'mute': false,
    'ph': 1,
    'pid': 'w6cBDwvu',
    'plugins': {
        'https://assets-jpcust.jwpsrv.com/player/6/6124956/ping.js': {
            'pixel': 'https://content.jwplatform.com/ping.gif'
        }
    },
    'preload': 'none',
    'primary': 'html5',
    'repeat': false,
    'skin': {
        'name': 'vapor'
    },
    'stagevideo': false,
    'stretching': 'uniform',
    'visualplaylist': false,
    'width': '100%'
};

@CSSModules(styles)
export default class YouTube extends React.Component {

    componentDidMount() {
        const { video_id = '3zBm2UKUgbc' } = this.props;

        jwplayer('video').setup({
            file: `https://www.youtube.com/watch?v=${video_id}`
        });

        // Examples of Player manipulation
        // setTimeout(() => {
        //     jwplayer().pause();
        //     jwplayer().setMute();

        //     setTimeout(() => {
        //         jwplayer().play();

        //         setTimeout(() => {
        //             const duration = jwplayer().getDuration();
        //             jwplayer().seek(duration / 2);
        //         }, 3000);
        //     }, 3000);
        // }, 5000);
    }

    render() {
        return (
            <div styleName='player'>
                <div id='video'></div>
            </div>
        );
    }
}
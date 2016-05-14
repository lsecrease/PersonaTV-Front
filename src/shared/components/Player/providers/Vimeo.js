import React from 'react';
import R from 'ramda';

require('vimeo-froogaloop');

export default class Vimeo extends React.Component {
    constructor(props) {
        super(props);
        this.config = {
            api: 1,
            autoplay: 1,
            fullscreen: 1,
            title: 0,
            byline: 0,
            badge: 0,
            portrait: 0
        };
    }

    /**
     * Transforms a config object into a query string
     * @return {String} - Example: api=1&autoplay=1&fullscreen=1 ...
     */
    getApiConfig() {
        return R.compose(
            R.join('&'),
            R.map((pair) => R.join('=', pair)),
            R.toPairs
        )(this.config);
    }

    componentDidMount() {
        this.froogaloop = this.froogaloop || window.$f(this.refs.player);

        // API to manipulate Vimeo videos
        setTimeout(() => {
            this.froogaloop.api('pause');
        }, 3000);

        setTimeout(() => {
            this.froogaloop.api('play');
            this.froogaloop.api('seekTo', 50);
            this.froogaloop.api('getCurrentTime', (time) => console.log('TIME IS', time));
            this.froogaloop.api('getDuration', (duration) => console.log('DURATION IS', duration));
        }, 5000);
    }

    render() {
        const { video_id = '61785607' } = this.props;

        return (
            <iframe
                ref='player'
                src={`https://player.vimeo.com/video/${video_id}?${this.getApiConfig()}`}
                width='60%'
                height='100%'
                frameBorder='0'
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen>
            </iframe>
        );
    }
}
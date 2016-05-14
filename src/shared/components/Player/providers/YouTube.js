import React from 'react';

export default class YouTube extends React.Component {

    componentDidMount() {
        const { video_id = '3zBm2UKUgbc' } = this.props;

        window.jwplayer('video').setup({
            file: `https://www.youtube.com/watch?v=${video_id}`,
            width: '60%'
        });
    }

    render() {
        return (
            <div id='video'></div>
        );
    }
}
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

@CSSModules(styles)
export default class YouTube extends React.Component {

    componentDidMount() {
        const { video_id = '3zBm2UKUgbc' } = this.props;

        window.jwplayer('video').setup({
            file: `https://www.youtube.com/watch?v=${video_id}`,
            width: '100%',
            aspectratio: '16:9',
            stretching: 'uniform'
        });
    }

    render() {
        return (
            <div styleName='player'>
                <div id='video'></div>
            </div>
        );
    }
}
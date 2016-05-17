import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

@CSSModules(styles)
export default class Playlist extends Component {
    render() {
        const { image_url } = this.props;

        return (
            <div styleName='container'>
                <div styleName='headline'>
                    You are watching:
                </div>

                <img src={image_url} alt='Playlist Image' />
            </div>
        );
    }
}
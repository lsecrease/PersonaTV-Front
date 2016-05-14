import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Player from '../shared/components/Player/';

@CSSModules(styles)
export default class Live extends Component {
    render() {
        return (
            <div styleName='container'>
                <Player />
            </div>
        );
    }
}

import React, { Component } from 'react';
import Header from '../Header/';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

@CSSModules(styles)
export default class Home extends Component {

    render() {
        return (
            <div styleName='main'>
                <Header />

                <div styleName='content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
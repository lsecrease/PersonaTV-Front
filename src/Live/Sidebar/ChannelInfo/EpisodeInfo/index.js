import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

import { Youtube } from '../../../../icons';

const providers_icons = {
    youtube: <Youtube />
};

@CSSModules(styles)
export default class EpisodeInfo extends Component {
    render() {
        const { provider, name, author } = this.props;

        return (
            <div styleName='container'>
                {providers_icons[provider]}

                <div styleName='general'>
                    <div>{name}</div>
                    <div>by {author}</div>
                </div>
            </div>
        );
    }
}
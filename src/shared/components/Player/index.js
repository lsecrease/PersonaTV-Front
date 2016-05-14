import React from 'react';
import * as providers from './providers';

export default class Player extends React.Component {
    render() {
        const { provider = 'youtube' } = this.props,
            Provider = providers[provider];

        return <Provider {...this.props} />;
    }
}

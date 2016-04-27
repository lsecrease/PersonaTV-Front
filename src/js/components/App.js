import React, { PropTypes, Component } from 'react';
import Greeting from './Greeting';

// Application Main CSS
require('../../styles/main.scss');

export default class App extends Component {

    componentDidMount() {
        const { setUserAuthenticated } = this.props.actions,
            { is_authenticated } = this.props.auth;

        /**
         * Just an example to show how we can use Redux actions
         */
        setTimeout(() => {
            if (!is_authenticated) {
                setUserAuthenticated(true);
            }
        }, 2000);
    }

    render() {
        const { is_authenticated } = this.props.auth;

        return (
            <div>
                <Greeting />
                <hr />
                <div>You're {is_authenticated ? '' : 'not'} authenticated.</div>
            </div>
        );
    }
}
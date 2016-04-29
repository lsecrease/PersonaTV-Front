import React, { Component } from 'react';
import { push } from 'react-router-redux';

export default class Login extends Component {

    componentWillReceiveProps(nextProps) {
        const { auth, dispatch, location } = nextProps;

        if (auth.is_authenticated) {
            dispatch(push(location.query ? location.query.redirect || '/' : '/'));
        }
    }

    render() {
        const { setUserAuthenticated } = this.props.actions;

        return (
            <div>
                <button onClick={setUserAuthenticated.bind(this, true)}>
                    Log me in
                </button>
            </div>
        );
    }
}
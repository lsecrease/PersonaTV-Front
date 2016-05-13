import React, { PropTypes } from 'react';
import { replace } from 'react-router-redux';

/**
 * High-Order Component to handle Authentication when
 * accessing auth-required routes.
 * 
 * @param  {Component} Wrapped - Wrapped Component
 */
const AuthenticatedRoute = Wrapped => class extends React.Component {
    static contextTypes = {
        store: PropTypes.object
    };
 
    componentWillMount() {
        const { store } = this.context,
            state = store.getState(),
            redirect = state.routing.locationBeforeTransitions.pathname;

        // If user not authenticated, redirects to /login
        // Login will handle redirect to 'redirect' route
        // specified on below query string
        if (!state.auth.is_authenticated) {
            store.dispatch(replace({
                pathname: '/login',
                query: {
                    redirect
                }
            }));
        }
    }

    render() {
        return <Wrapped />;
    }
};

export default AuthenticatedRoute;
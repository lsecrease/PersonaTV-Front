import React from 'react';
import { Route } from 'react-router';
import { AuthHook } from '../utils/route-authenticator';

// Containers
import Login from '../containers/Login';

// Components
import Home from '../components/Home';
import LiveStreaming from '../components/LiveStreaming';
import NotFound from '../components/NotFound';
import Channels from '../components/Channels';

export function getRouter(store) {
    return (
        <div>
            <Route path='/' component={Home}>
                <Route path='login' component={Login} />
                <Route path='live' component={LiveStreaming} onEnter={AuthHook.bind(this, store)} />
                <Route path='channels' component={Channels} onEnter={AuthHook.bind(this, store)} />
            </Route>
            <Route path='*' component={NotFound} />
        </div>
    );
}
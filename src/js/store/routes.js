import React from 'react';
import { Route } from 'react-router';

// Containers
import Login from '../containers/Login';

// Components
import Home from '../components/Home';
import LiveStreaming from '../components/LiveStreaming';
import NotFound from '../components/NotFound';
import Channels from '../components/Channels';
import AuthenticatedRoute from '../components/AuthenticatedRoute';

export const routes = (
    <div>
        <Route path='/' component={Home}>
            <Route path='login' component={Login} />
            <Route path='live' component={AuthenticatedRoute(LiveStreaming)} />
            <Route path='channels' component={AuthenticatedRoute(Channels)} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
);
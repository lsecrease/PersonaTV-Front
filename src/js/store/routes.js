import React from 'react';
import { Route } from 'react-router';

// Containers
import Login from '../containers/Login';

// Components
import Home from '../components/Home';
import LiveStreaming from '../components/LiveStreaming';
import NotFound from '../components/NotFound';
import Explore from '../components/Explore';
import Favorites from '../components/Favorites';
import AuthenticatedRoute from '../components/AuthenticatedRoute';

export const routes = (
    <div>
        <Route path='/' component={Home}>
            <Route path='login' component={Login} />
            <Route path='live' component={LiveStreaming} />
            <Route path='explore' component={Explore} />
            <Route path='favorites' component={AuthenticatedRoute(Favorites)} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
);
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Containers
import Login from '../Login/';

// Components
import Home from '../Home/';
import Live from '../Live/';
import NotFound from '../NotFound/';
import Explore from '../Explore/';
import Favorites from '../Favorites/';
import AuthenticatedRoute from '../shared/components/AuthenticatedRoute';

export const routes = (
    <div>
        <Route path='/' component={Home}>
            <IndexRoute component={Live} />
            <Route path='login' component={Login} />
            <Route path='live' component={Live} />
            <Route path='explore' component={Explore} />
            <Route path='favorites' component={AuthenticatedRoute(Favorites)} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
);
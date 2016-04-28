import React, { Component } from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import routes from './routes';

const logger = createLogger({
    predicate: () => process.env.NODE_ENV === 'development'
});

const createStoreWithMiddleware = compose(
    applyMiddleware(logger, thunk)
)(createStore);

const store = createStoreWithMiddleware(reducers),
    history = useRouterHistory(createHashHistory)({ queryKey: false });

export default class Store extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history} routes={routes} />
            </Provider>
        );
    }
}

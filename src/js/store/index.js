import React, { Component } from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import App from '../containers/App';

const logger = createLogger({
    predicate: (getState, action) => process.env.NODE_ENV === 'development'
});

const createStoreWithMiddleware = compose(
    applyMiddleware(logger, thunk)
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default class Store extends Component {
    render() {
        return (
            <Provider store={store}>
                {this.props.children}
            </Provider>
        );
    }
}

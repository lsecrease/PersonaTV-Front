import { compose, createStore, applyMiddleware } from 'redux';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import createLogger from 'redux-logger';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { routes } from './routes';

const logger = createLogger({
    predicate: () => process.env.NODE_ENV === 'development'
});

const baseHistory = useRouterHistory(createHashHistory)({ queryKey: false }),
    createStoreWithMiddleware = compose(
    applyMiddleware(logger, thunk, routerMiddleware(baseHistory))
)(createStore);

const store = createStoreWithMiddleware(reducers),
    history = syncHistoryWithStore(
        baseHistory,
        store
    );

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers');
        store.replaceReducer(nextRootReducer);
    });
}

export {
    store,
    history,
    routes
};
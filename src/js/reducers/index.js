import { combineReducers } from 'redux';
import authentication from './authentication';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
    auth: authentication,
    routing: routerReducer
});

export default reducers;

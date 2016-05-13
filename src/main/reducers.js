import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authentication from '../shared/reducers/authentication';

const reducers = combineReducers({
    auth: authentication,
    routing: routerReducer
});

export default reducers;

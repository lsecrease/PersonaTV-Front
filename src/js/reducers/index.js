import { combineReducers } from 'redux';
import authentication from './authentication';

const reducers = combineReducers({
    auth: authentication
});

export default reducers;

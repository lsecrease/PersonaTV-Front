import { createReducer } from 'redux-act';
import { authentication as actions } from '../actions';

export default createReducer({
    [actions.setUserAuthenticated]: (state, payload) => {
        return {
            ...state,
            is_authenticated: payload.is_authenticated
        };
    },
}, {
    is_authenticated: false
});

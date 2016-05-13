import { createAction } from 'redux-act';

export const setUserAuthenticated = createAction('SET_USER_AUTHENTICATED', (is_authenticated) => ({ is_authenticated }));
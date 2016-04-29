
/**
 * This function will be called 'onEnter' event
 * by react-router, on a few routes.
 * @param {Object} store     - Redux Store
 * @param {Object} nextState - Route next state
 * @param {Function} replace - Function to replace current route
 */
export function AuthHook(store, nextState, replace) {
    if (!store.getState().auth.is_authenticated) {
        replace({
            pathname: '/login',
            query: {
                redirect: nextState.location.pathname
            }
        });
    }
}
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { authentication as actions } from '../actions';

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

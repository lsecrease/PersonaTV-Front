import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginContainer from '../components/Login';
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
        }, dispatch),
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeaderContainer from '../components/Header';

function mapStateToProps() {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
        }, dispatch),
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

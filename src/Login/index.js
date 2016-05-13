import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authentication as actions } from '../shared/actions';

import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { Dialog, RaisedButton, FontIcon } from 'material-ui';
import { Facebook, Twitter } from '../icons';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

@CSSModules(styles)
export class Login extends Component {

    componentWillReceiveProps(nextProps) {
        const { auth, dispatch, location } = nextProps;

        if (auth.is_authenticated) {
            dispatch(push(location.query ? location.query.redirect || '/' : '/'));
        }
    }

    render() {
        return (
            <Dialog
                title={'Ready to Join?'}
                modal={false}
                open={true}
                contentClassName={styles.content}
                titleClassName={styles.title}>

                <div styleName='passport_buttons'>
                    <RaisedButton
                        label='Login with Facebook'
                        linkButton={false}
                        secondary={true}
                        backgroundColor='#3A579A'
                        icon={<Facebook />} />

                    <RaisedButton
                        label='Login with Twitter'
                        linkButton={false}
                        secondary={true}
                        backgroundColor='#3C97FF'
                        icon={<Twitter />} />
                </div>

                <div styleName='signin_email'>
                    <p styleName='paragraph_text'>Or</p>

                    <div styleName='email_button_container'>
                        <RaisedButton
                            label='Sign In with Email'
                            icon={<FontIcon className='material-icons'>email</FontIcon>} />
                    </div>
                </div>

                <div styleName='disclaimer'>
                    <p style={{fontSize: '10px', color: 'gray'}}>
                        By signing in, you agree to PersonaTV's Terms and Conditions of Use and Privacy Policy
                    </p>

                    <a href='#' style={{fontSize: '12px', color: '#030303', marginTop: '0.5em'}}>
                        No Thanks, I don't want to create an account
                    </a>
                </div>
            </Dialog>
        );
    }
}

export default connect((state) => {
    return {
        auth: state.auth
    };
}, (dispatch) => {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch),
        dispatch
    };
})(Login);

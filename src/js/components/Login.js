import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { Dialog, RaisedButton } from 'material-ui';
import { Facebook, Twitter } from './icons';

export default class Login extends Component {

    componentWillReceiveProps(nextProps) {
        const { auth, dispatch, location } = nextProps;

        if (auth.is_authenticated) {
            dispatch(push(location.query ? location.query.redirect || '/' : '/'));
        }
    }

    render() {
        return (
            <Dialog
                title='Ready to Join?'
                modal={false}
                open={true}
                contentStyle={{width: '25%'}}
                titleStyle={{fontSize: '40px', fontWeight: '100'}}>

                <div className='login_passport_buttons' style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '2em'}}>

                    <RaisedButton
                        label="Login with Facebook"
                        linkButton={false}
                        secondary={true}
                        backgroundColor={'#3A579A'}
                        icon={<Facebook viewBox='0 0 11 21' />} />

                    <RaisedButton
                        label="Login with Twitter"
                        linkButton={false}
                        secondary={true}
                        backgroundColor={'#3C97FF'}
                        icon={<Twitter viewBox='0 0 21 16' />} />
                </div>

                <div className='signin_email' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '1em'}}>

                    <p style={{color: '#030303'}}>
                        Or Sign In via Email
                    </p>

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
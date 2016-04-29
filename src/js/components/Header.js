import React from 'react';
import Greeting from './Greeting';
import { push } from 'react-router-redux';

export default class Header extends React.Component {

    go(route) {
        this.props.dispatch(push(route));
    }

    render() {
        return (
            <div className='header'>
                <Greeting />

                <div className='options'>
                    <button onClick={this.go.bind(this, '/live')}>Live</button>
                    <button onClick={this.go.bind(this, '/channels')}>Channels</button>
                </div>
            </div>
        );
    }
}

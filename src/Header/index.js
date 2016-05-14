import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

import { push } from 'react-router-redux';
import {
    Paper,
    Toolbar,
    ToolbarGroup,
    Avatar,
    Tabs,
    Tab,
    RaisedButton,
    IconButton,
    FontIcon
} from 'material-ui';

import { Notifications } from '../icons';

const logo = require('../images/logo.png'),
    user_picture = require('../images/user.png');

@CSSModules(styles)
export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'live'
        };
    }

    go(route) {
        this.props.dispatch(push(route));
    }

    onTabChange(tab) {
        this.setState({ selectedTab: tab });
        this.go(tab);
    }

    render() {
        return (
            <Paper zDepth={2}>
                <Toolbar styleName='toolbar'>
                    <ToolbarGroup styleName='logo'>
                        <Avatar src={logo} />
                    </ToolbarGroup>

                    <ToolbarGroup styleName='tabs'>
                        <Tabs
                            value={this.state.selectedTab}
                            onChange={this.onTabChange.bind(this)}
                            tabItemContainerStyle={{backgroundColor: '#434343'}}
                            inkBarStyle={{backgroundColor: '#16FBB3'}}>

                            <Tab label='Explore' value='explore' />
                            <Tab label='Favorites' value='favorites' />
                            <Tab label='Live' value='live' />
                        </Tabs>
                    </ToolbarGroup>

                    <ToolbarGroup styleName='right-items'>
                        <RaisedButton label='Upload' backgroundColor={'#00D592'} labelColor={'white'} />

                        <IconButton tooltip='Search'>
                            <FontIcon className='material-icons' color={'#BDC6CF'}>search</FontIcon>
                        </IconButton>

                        <IconButton tooltip='Notifications' styleName='notifications'>
                            <Notifications styles={{width: '21px', height: '21px', fill: '#BDC6CF'}} viewBox='0 0 25 25' />
                        </IconButton>

                        <IconButton styleName='avatar'>
                            <Avatar src={user_picture} />
                        </IconButton>
                    </ToolbarGroup>
                </Toolbar>
            </Paper>
        );
    }
}

export default connect(() => {
    return {};
}, (dispatch) => {
    return {
        actions: bindActionCreators({
        }, dispatch),
        dispatch
    };
})(Header);
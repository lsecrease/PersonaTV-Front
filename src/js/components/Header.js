import React from 'react';
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
    FontIcon,
    Badge
} from 'material-ui';

const logo = require('../images/logo.png'),
    user_picture = require('../images/user.png');

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'explore'
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
                <Toolbar
                    style={{
                        display: 'flex',
                        backgroundColor: '#434343',
                        opacity: '0.9'
                    }}>

                    <ToolbarGroup style={{alignSelf: 'center'}}>
                        <Avatar src={logo} />
                    </ToolbarGroup>

                    <ToolbarGroup style={{marginLeft: '1em', width: '30%', alignSelf: 'flex-end'}}>
                        <Tabs
                            value={this.state.selectedTab}
                            onChange={this.onTabChange.bind(this)}
                            tabItemContainerStyle={{backgroundColor: '#434343'}}
                            inkBarStyle={{backgroundColor: '#16FBB3'}}>

                            <Tab label='Explore' value='explore'>
                            </Tab>
                            <Tab label='Favorites' value='favorites'>
                            </Tab>
                            <Tab label='Live' value='live'>
                            </Tab>
                        </Tabs>
                    </ToolbarGroup>

                    <ToolbarGroup style={{
                        marginLeft: '10em',
                        width: '70%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}>

                        <RaisedButton label='Upload' backgroundColor={'#00D592'} labelColor={'white'} />

                        <IconButton tooltip='Search'>
                            <FontIcon className='material-icons' color={'#BDC6CF'}>search</FontIcon>
                        </IconButton>

                        <Badge badgeContent={2} badgeStyle={{top: 30, left: 35, width: '18px', height: '18px', backgroundColor: '#00D592', color: 'white', fontWeight: 'bold', fontSize: '10px'}}>
                            <IconButton tooltip='Notifications'>
                                <FontIcon className='material-icons' color={'#BDC6CF'}>notifications</FontIcon>
                            </IconButton>
                        </Badge>

                        <IconButton style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                            <Avatar src={user_picture} />
                        </IconButton>
                    </ToolbarGroup>
                </Toolbar>
            </Paper>
        );
    }
}

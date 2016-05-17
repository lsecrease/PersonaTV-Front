import React from 'react';
import styles from './styles.css';
import { IconButton, FontIcon, Avatar } from 'material-ui';

const UserLoggedIn = ({ props }) => (
    <div className={styles.container}>
        <h6 className={styles.username}>{props.name}</h6>
        <IconButton className={styles.avatar}>
            <Avatar src={props.picture} />
        </IconButton>

        <IconButton
            iconStyle={{height: 24, width: 24}}
            style={{height: 24, width: 24, padding: 0}}>

            <FontIcon className='material-icons' color={'#BDC6CF'}>
                keyboard_arrow_down
            </FontIcon>
        </IconButton>
    </div>
);

export default UserLoggedIn;
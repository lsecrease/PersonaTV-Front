import React from 'react';
import styles from './styles.css';
import { IconButton, FontIcon, Avatar } from 'material-ui';

export const UserLoggedIn = ({ name, picture }) => (
    <div className={styles.container}>
        <h6 className={styles.username}>{name}</h6>
        <IconButton className={styles.avatar}>
            <Avatar src={picture} />
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
import React from 'react';
import styles from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  const path = '/messages/';

  return (
    <div className={styles.dialog}>
      <div className={styles.dialog_avatar_image}>
        <img src={props.avatar} alt='avatar' />
        <NavLink to={`${path}${props.id}`}>{props.name}</NavLink>
      </div>
    </div>
  );
};

export default DialogItem;

import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  const path = '/messages/';

  return (
    <div className={styles.dialog}>
      <NavLink to={`${path}${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={styles.message}>{props.messageText}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs_main}>
      <div className={styles.dialogs_items}>
        <DialogItem name='Aaron' id='1' />
        <DialogItem name='Bernard' id='2' />
        <DialogItem name='Christopher' id='3' />
        <DialogItem name='Dylan' id='4' />
      </div>
      <div className={styles.dialogs_messages}>
        <Message messageText='Sint duis nisi pariatur duis irure quis labore ut eiusmod in quis.' />
        <Message messageText='Do est occaecat elit elit in voluptate exercitation quis exercitation magna ea ullamco.' />
        <Message messageText='Laborum dolor anim Lorem ullamco veniam ad ea.' />
      </div>
    </div>
  );
};

export default Dialogs;

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

let dialogsData = [
  { id: 1, name: 'Aaron' },
  { id: 2, name: 'Bernard' },
  { id: 3, name: 'Christopher' },
  { id: 4, name: 'Dylan' },
];

let messagesData = [
  { id: 1, text: 'Sint duis nisi pariatur duis irure quis labore ut eiusmod in quis.' },
  { id: 2, text: 'Do est occaecat elit elit in voluptate exercitation quis exercitation magna ea ullamco.' },
  { id: 3, text: 'Laborum dolor anim Lorem ullamco veniam ad ea.' },
];

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs_main}>
      <div className={styles.dialogs_items}>
        <DialogItem id={dialogsData.name[0]} name={dialogsData.id[0]} />
        <DialogItem id={dialogsData.name[1]} name={dialogsData.id[1]} />
        <DialogItem id={dialogsData.name[2]} name={dialogsData.id[2]} />
        <DialogItem id={dialogsData.name[3]} name={dialogsData.id[3]} />
      </div>
      <div className={styles.dialogs_messages}>
        <Message id={messagesData.id[0]} messageText={messagesData.text[0]} />
        <Message id={messagesData.id[0]} messageText={messagesData.text[1]} />
        <Message id={messagesData.id[0]} messageText={messagesData.text[2]} />
      </div>
    </div>
  );
};

export default Dialogs;

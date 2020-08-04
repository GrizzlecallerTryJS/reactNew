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

  return (
    <div className={styles.dialogs_main}>
      <div className={styles.dialogs_items}>
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
        <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
        <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
      </div>
      <div className={styles.dialogs_messages}>
        <Message id={messagesData[0].id} messageText={messagesData[0].text} />
        <Message id={messagesData[1].id} messageText={messagesData[1].text} />
        <Message id={messagesData[2].id} messageText={messagesData[2].text} />
      </div>
    </div>
  );
};

export default Dialogs;

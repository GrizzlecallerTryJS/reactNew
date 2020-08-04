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
    { id: 4, text: 'Ad elit ea id reprehenderit reprehenderit nisi culpa esse eiusmod ut.' },
    { id: 5, text: 'Quis laboris irure ullamco dolore nostrud.' },
    { id: 6, text: 'Eu dolor nulla esse fugiat ea non est consequat ad exercitation laboris dolore mollit cupidatat.' },
    { id: 7, text: 'Est laboris sit elit magna veniam nostrud mollit duis minim.' },
  ];

  const NameMassive = dialogsData.map((dialog) => {
    return <DialogItem id={dialog.id} name={dialog.name} />;
  });

  const MessageMassive = messagesData.map((message) => {
    return <Message id={message.id} messageText={message.text} />;
  });

  return (
    <div className={styles.dialogs_main}>
      <div className={styles.dialogs_items}>{NameMassive}</div>
      <div className={styles.dialogs_messages}>{MessageMassive}</div>
    </div>
  );
};

export default Dialogs;

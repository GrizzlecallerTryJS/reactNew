import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
  const NameMassive = props.state.dialogsData.map((dialog) => {
    return <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />;
  });

  const MessageMassive = props.state.messagesData.map((message) => {
    return <MessageItem id={message.id} messageText={message.text} />;
  });
  return (
    <div className={styles.dialogs_main}>
      <div className={styles.dialogs_items}>{NameMassive}</div>
      <div className={styles.dialogs_messages}>{MessageMassive}</div>
    </div>
  );
};

export default Dialogs;

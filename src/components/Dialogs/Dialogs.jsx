import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
  debugger;
  const NameMassive = props.dialogsData.map((dialog) => {
    return <DialogItem id={dialog.id} name={dialog.name} />;
  });

  const MessageMassive = props.messagesData.map((message) => {
    return <MessageItem id={message.id} messageText={message.text} />;
  });
  debugger;
  return (
    <div className={styles.dialogs_main}>
      <div className={styles.dialogs_items}>{NameMassive}</div>
      <div className={styles.dialogs_messages}>{MessageMassive}</div>
    </div>
  );
};

export default Dialogs;

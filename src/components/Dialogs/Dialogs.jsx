import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { addMessageAC, updateNewMessageTextAC } from '../../redux/state';

const Dialogs = (props) => {
  const NameMassive = props.forDialogs.dialogsData.map((dialog) => {
    return <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />;
  });

  const MessageMassive = props.forDialogs.messagesData.map((message) => {
    return <MessageItem id={message.id} messageText={message.text} />;
  });

  let newDialogElement = React.createRef();

  let updateNewMessageText = () => {
    let text = newDialogElement.current.value;
    props.dispatch(updateNewMessageTextAC(text));
  };

  let addMessage = () => {
    props.dispatch(addMessageAC());
  };

  return (
    <div className={styles.dialogs_main}>
      <div className={styles.dialogs_items}>{NameMassive}</div>
      <div className={styles.dialogs_messages}>
        <div>{MessageMassive}</div>
        <div>
          <textarea onChange={updateNewMessageText} ref={newDialogElement} value={props.forDialogs.newMessageText} />
          <button onClick={addMessage}>add post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

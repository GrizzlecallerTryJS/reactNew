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

  let newDialogElement = React.createRef();

  let addDialog = () => {
    let text = newDialogElement.current.value;
    alert(text);
    newDialogElement.current.value = '';
  };

  return (
    <div className={styles.dialogs_main}>
      <div className={styles.dialogs_items}>{NameMassive}</div>
      <div className={styles.dialogs_messages}>
        <div>{MessageMassive}</div>
        <div>
          <textarea ref={newDialogElement} />
          <button onClick={addDialog}>add post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

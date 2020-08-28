import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { Redirect } from 'react-router-dom';

class Dialogs extends React.Component {
  updateNewMessageText = (element) => {
    let text = element.target.value;
    this.props.updateNewMessageText(text);
  };

  addMessage = () => {
    this.props.addMessage();
  };

  render () {
    let NameMassive = this.props.forDialogs.dialogsData.map((dialog) => {
      return <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />;
    });

    let MessageMassive = this.props.forDialogs.messagesData.map((message) => {
      return <MessageItem id={message.id} messageText={message.text} />;
    });
    return (
      <div className={styles.dialogs_main}>
        <div className={styles.dialogs_items}>{NameMassive}</div>
        <div className={styles.dialogs_messages}>
          <div>{MessageMassive}</div>
          <div>
            <textarea onChange={this.updateNewMessageText} value={this.props.forDialogs.newMessageText} />
            <button onClick={this.addMessage}>add post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialogs;

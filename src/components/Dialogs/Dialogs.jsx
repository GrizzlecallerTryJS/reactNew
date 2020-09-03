import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import DialogsForm from './DialogsForm/DialogsForm';
import { reduxForm } from 'redux-form';

const DialogReduxForm = reduxForm({ form: 'dialogForm' })(DialogsForm);

class Dialogs extends React.Component {
  updateNewMessageText = (element) => {
    let text = element.target.value;
    this.props.updateNewMessageText(text);
  };

  addMessage = (values) => {
    this.props.addMessage(values.dialogField);
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
            <DialogReduxForm onSubmit={this.addMessage} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dialogs;

/* <textarea onChange={this.updateNewMessageText} value={this.props.forDialogs.newMessageText} />
            <button onClick={this.addMessage}>add post</button> */

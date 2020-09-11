import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import DialogsForm from './DialogsForm/DialogsForm';
import { reduxForm } from 'redux-form';

const DialogReduxForm = reduxForm({ form: 'dialogForm' })(DialogsForm);

class Dialogs extends React.Component {
  addMessage = (values) => {
    this.props.addMessage(values.dialogField);
  };

  render () {
    let NameMassive = this.props.forDialogs.dialogsData.map((dialog) => {
      return <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} avatar={dialog.avatar} />;
    });

    let MessageMassive = this.props.forDialogs.messagesData.map((message) => {
      return <MessageItem id={message.id} key={message.id} messageText={message.text} />;
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

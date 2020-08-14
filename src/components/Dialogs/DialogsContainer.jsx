import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageTextAC, addMessageAC } from '../../redux/Message-Reducer';

const DialogsContainer = (props) => {
  let state = props.store.getState().forDialogs;

  let updateNewMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextAC(text));
  };

  let addMessage = () => {
    props.store.dispatch(addMessageAC());
  };

  return <Dialogs updateNewMessageText={updateNewMessageText} addMessage={addMessage} forDialogs={state} />;
};

export default DialogsContainer;

import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageTextAC, addMessageAC } from '../../redux/Message-Reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
  //let state = props.store.getState().forDialogs;

  /* let updateNewMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextAC(text));
  };

  let addMessage = () => {
    props.store.dispatch(addMessageAC());
  }; */

  return (
    <StoreContext.Consumer>
      {(store) => {
        let updateNewMessageText = (text) => {
          store.dispatch(updateNewMessageTextAC(text));
        };

        let addMessage = () => {
          store.dispatch(addMessageAC());
        };

        let state = store.getState().forDialogs;
        return <Dialogs updateNewMessageText={updateNewMessageText} addMessage={addMessage} forDialogs={state} />;
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;

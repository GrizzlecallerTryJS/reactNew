const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messageReducer = (state, action) => {
  const _addMessage = () => {
    let last = state.messagesData.length - 1;
    const newId = state.messagesData[last].id + 1;
    let newMessage = {
      id: newId,
      text: state.newMessageText,
    };
    state.messagesData.push(newMessage);
    state.newMessageText = '';
  };

  const _updateNewMessageText = (newMessageText) => {
    state.newMessageText = newMessageText;
  };

  if (action.type === ADD_MESSAGE) {
    _addMessage();
  } else if ((action.type = UPDATE_NEW_MESSAGE_TEXT)) {
    _updateNewMessageText(action.newMessageText);
  }
  return state;
};

export const addMessageAC = () => {
  return { type: ADD_MESSAGE };
};

export const updateNewMessageTextAC = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text,
  };
};

export default messageReducer;

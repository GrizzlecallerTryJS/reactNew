const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: 'Aaron',
      avatar:
        'https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-man-avatar-social-responsibility-vector-png-image_4822946.jpg',
    },
    {
      id: 2,
      name: 'Bernard',
      avatar:
        'https://thumbs.dreamstime.com/z/man-mustache-male-avatar-cartoon-social-media-icon-isolated-flat-illustration-vector-graphic-76950613.jpg',
    },
    {
      id: 3,
      name: 'Christopher',
      avatar:
        'https://n1.nextpng.com/sticker-png/664/825/sticker-png-social-media-icons-avatar-male-man-female-face-facial-hair-facial-expression.png',
    },
    { id: 4, name: 'Dylan', avatar: 'https://www.colourbox.com/preview/22295197-avatar-man-icon.jpg' },
  ],

  messagesData: [
    { id: 1, text: 'Sint duis nisi pariatur duis irure quis labore ut eiusmod in quis.' },
    { id: 2, text: 'Do est occaecat elit elit in voluptate exercitation quis exercitation magna ea ullamco.' },
    { id: 3, text: 'Laborum dolor anim Lorem ullamco veniam ad ea.' },
    { id: 4, text: 'Ad elit ea id reprehenderit reprehenderit nisi culpa esse eiusmod ut.' },
    { id: 5, text: 'Quis laboris irure ullamco dolore nostrud.' },
    { id: 6, text: 'Eu dolor nulla esse fugiat ea non est consequat ad exercitation.' },
    { id: 7, text: 'Est laboris sit elit magna veniam nostrud mollit duis minim.' },
  ],
  newMessageText: 'test',
};

const messageReducer = (state = initialState, action) => {
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

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const LIKE_BUTTON_COUNTER = 'LIKE-BUTTON-COUNTER';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    forDialogs: {
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
    },
    forPosts: {
      postData: [
        { id: 1, message: 'BEEP', likeCount: 15, liked: false },
        { id: 2, message: 'BOOP', likeCount: 20, liked: false },
        { id: 3, message: 'BOOP', likeCount: 20, liked: false },
        { id: 4, message: 'I', likeCount: 20, liked: false },
        { id: 5, message: 'AM', likeCount: 20, liked: false },
        { id: 6, message: 'A', likeCount: 20, liked: false },
        { id: 7, message: 'ROBOT', likeCount: 20, liked: false },
      ],
      newPostText: 'test',
    },
    forNavbar: {
      navbarData: [
        { id: 1, article: 'Profile', path: '/profile' },
        { id: 2, article: 'Messages', path: '/messages' },
        { id: 3, article: 'News', path: '/news' },
        { id: 4, article: 'Music', path: '/music' },
        { id: 5, article: 'Settings', path: '/settings' },
        { id: 6, article: 'Friends', path: '/friends' },
      ],
    },
    forApp: {
      appData: [
        { appData_id: 1, component: 'DialogsCaller', path: '/messages', route: true },
        { appData_id: 2, component: 'ProfileCaller', path: '/profile', route: true },
        { appData_id: 3, component: 'News', path: '/news', route: true },
        { appData_id: 4, component: 'Music', path: '/music', route: true },
        { appData_id: 5, component: 'Settings', path: '/settings', route: true },
        { appData_id: 6, component: 'Friends', path: '/friends', route: true },
        { appData_id: 7, component: 'HeaderCaller', path: null, route: false },
        { appData_id: 8, component: 'NavbarCaller', path: null, route: false },
      ],
    },
  },

  _callSubscriber () {
    console.log('state was changed');
  },

  _addPost () {
    let last = this._state.forPosts.postData.length - 1;
    const newId = this._state.forPosts.postData[last].id + 1;
    let newPost = {
      id: newId,
      message: this._state.forPosts.newPostText,
      likeCount: 0,
    };
    this._state.forPosts.postData.push(newPost);
    this._state.forPosts.newPostText = '';
    this._callSubscriber(this._state);
  },

  _addMessage () {
    let last = this._state.forDialogs.messagesData.length - 1;
    const newId = this._state.forDialogs.messagesData[last].id + 1;
    let newMessage = {
      id: newId,
      text: this._state.forDialogs.newMessageText,
    };
    this._state.forDialogs.messagesData.push(newMessage);
    this._state.forDialogs.newMessageText = '';
    this._callSubscriber(this._state);
  },

  _updateNewPostText (newPostText) {
    this._state.forPosts.newPostText = newPostText;
    this._callSubscriber(this._state);
  },

  _updateNewMessageText (newMessageText) {
    this._state.forDialogs.newMessageText = newMessageText;
    this._callSubscriber(this._state);
  },

  _likeButtonCounter (id) {
    if (!this.getState().forPosts.postData[id - 1].liked) {
      this._state.forPosts.postData[id - 1].likeCount += 1;
      this._state.forPosts.postData[id - 1].liked = true;
      this._callSubscriber(this._state);
    } else {
      this._state.forPosts.postData[id - 1].likeCount -= 1;
      this._state.forPosts.postData[id - 1].liked = false;
      this._callSubscriber(this._state);
    }
  },

  getState () {
    return this._state;
  },

  subscribe (observer) {
    this._callSubscriber = observer;
  },

  dispatch (action) {
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newPostText);
    } else if (action.type === LIKE_BUTTON_COUNTER) {
      this._likeButtonCounter(action.id);
    } else if (action.type === ADD_MESSAGE) {
      this._addMessage();
    } else if ((action.type = UPDATE_NEW_MESSAGE_TEXT)) {
      this._updateNewMessageText(action.newMessageText);
    }
  },
};

export const addPostAC = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextAC = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text,
  };
};

export const likeButtonCounterAC = (id) => {
  return {
    type: LIKE_BUTTON_COUNTER,
    id: id,
  };
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

export default store;
window.store = store;

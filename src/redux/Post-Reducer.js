const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const LIKE_BUTTON_COUNTER = 'LIKE-BUTTON-COUNTER';

let initialState = {
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
};

const postReducer = (state = initialState, action) => {
  /* let stateCopy = { ...state };
  stateCopy.postData = [
    ...state.postData,
  ]; */

  let stateCopy = state;

  const _addPost = () => {
    stateCopy = {
      ...state,
      postData: [
        ...state.postData,
      ],
    };

    let last = stateCopy.postData.length - 1;

    const newId = stateCopy.postData[last].id + 1;

    let newPost = {
      id: newId,
      message: stateCopy.newPostText,
      likeCount: 0,
      liked: false,
    };

    stateCopy.postData.push(newPost);
    stateCopy.newPostText = '';
  };

  const _likeButtonCounter = (id) => {
    stateCopy = {
      ...state,
      postData: [
        ...state.postData,
      ],
    };

    if (!stateCopy.postData[id - 1].liked) {
      stateCopy.postData[id - 1].likeCount += 1;
      stateCopy.postData[id - 1].liked = true;
    } else {
      stateCopy.postData[id - 1].likeCount -= 1;
      stateCopy.postData[id - 1].liked = false;
    }
  };

  const _updateNewPostText = (newPostText) => {
    stateCopy = {
      ...state,
    };

    stateCopy.newPostText = newPostText;
  };

  if (action.type === ADD_POST) {
    _addPost();
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    _updateNewPostText(action.newPostText);
  } else if (action.type === LIKE_BUTTON_COUNTER) {
    _likeButtonCounter(action.id);
  }
  return stateCopy;
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

export default postReducer;

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
  const _addPost = () => {
    let last = state.postData.length - 1;
    const newId = state.postData[last].id + 1;
    let newPost = {
      id: newId,
      message: state.newPostText,
      likeCount: 0,
    };
    state.postData.push(newPost);
    state.newPostText = '';
  };

  const _updateNewPostText = (newPostText) => {
    state.newPostText = newPostText;
  };

  if (action.type === ADD_POST) {
    _addPost();
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    _updateNewPostText(action.newPostText);
  }

  return state;
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

export default postReducer;

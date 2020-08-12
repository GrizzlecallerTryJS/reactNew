const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const postReducer = (state, action) => {
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

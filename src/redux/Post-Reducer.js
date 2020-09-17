const ADD_POST = 'ADD-POST';
const LIKE_BUTTON_COUNTER = 'LIKE-BUTTON-COUNTER';
const DELETE_POST = 'DELETE-POST';

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
};

const postReducer = (state = initialState, action) => {
  /* let stateCopy = { ...state };
  stateCopy.postData = [
    ...state.postData,
  ]; */

  let stateCopy = state;

  const _addPost = (postMessage) => {
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
      message: postMessage,
      likeCount: 0,
      liked: false,
    };

    stateCopy.postData.push(newPost);
  };

  const _likeButtonCounter = (id) => {
    stateCopy = {
      ...state,
      postData: [
        ...state.postData,
      ],
    };

    if (!stateCopy.postData[id - 1].liked)
    {
      stateCopy.postData[id - 1].likeCount += 1;
      stateCopy.postData[id - 1].liked = true;
    } else
    {
      stateCopy.postData[id - 1].likeCount -= 1;
      stateCopy.postData[id - 1].liked = false;
    }
  };

  const _deletePost = (postId) => {
    stateCopy = {
      ...state,
      postData: [
        ...stateCopy.postData.filter(p => p.id !== postId)
      ],
    }
  }

  if (action.type === ADD_POST)
  {
    _addPost(action.postMessage);
  } else if (action.type === LIKE_BUTTON_COUNTER)
  {
    _likeButtonCounter(action.id);
  } else if (action.type === DELETE_POST)
  {
    _deletePost(action.postId);
  }
  return stateCopy;
};

/* Action creators */

export const addPost = (postMessage) => {
  return {
    type: ADD_POST,
    postMessage: postMessage,
  };
};

export const likeButtonCounter = (id) => {
  return {
    type: LIKE_BUTTON_COUNTER,
    id: id,
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId: postId,
  }
}

/* Getters */

export const getPostData = (state) => {
  return state.forPosts.postData;
};

export default postReducer;

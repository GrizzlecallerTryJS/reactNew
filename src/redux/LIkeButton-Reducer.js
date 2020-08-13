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

const likeButtonReducer = (state = initialState, action) => {
  const _likeButtonCounter = (id) => {
    if (!state.postData[id - 1].liked) {
      state.postData[id - 1].likeCount += 1;
      state.postData[id - 1].liked = true;
    } else {
      state.postData[id - 1].likeCount -= 1;
      state.postData[id - 1].liked = false;
    }
  };

  if (action.type === LIKE_BUTTON_COUNTER) {
    _likeButtonCounter(action.id);
  }
  return state;
};

export const likeButtonCounterAC = (id) => {
  return {
    type: LIKE_BUTTON_COUNTER,
    id: id,
  };
};

export default likeButtonReducer;

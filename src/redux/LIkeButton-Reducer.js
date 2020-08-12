const LIKE_BUTTON_COUNTER = 'LIKE-BUTTON-COUNTER';

const likeButtonReducer = (state, action) => {
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

import { createStore, combineReducers } from 'redux';

import postReducer from './Post-Reducer';
import messageReducer from './Message-Reducer';
import likeButtonReducer from './LIkeButton-Reducer';

let reducers = combineReducers({
  forPosts: postReducer,
  likeButtonReducer: likeButtonReducer,
  forDialogs: messageReducer,
  //forNavbar: hz,
});

let store = createStore(reducers);

export default store;

import { createStore, combineReducers } from 'redux';

import postReducer from './Post-Reducer';
import messageReducer from './Message-Reducer';
import navBarReducer from './NavBar-Reducer';
import usersReducer from './Users-Reducer';

let reducers = combineReducers({
  forPosts: postReducer,
  forUsers: usersReducer,
  forDialogs: messageReducer,
  forNavbar: navBarReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;

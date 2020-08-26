import { createStore, combineReducers, applyMiddleware } from 'redux';

import postReducer from './Post-Reducer';
import messageReducer from './Message-Reducer';
import navBarReducer from './NavBar-Reducer';
import usersReducer from './Users-Reducer';
import profileReducer from './Profile-Reducer';
import authReducer from './Auth-Reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  forPosts: postReducer,
  forUsers: usersReducer,
  forAuth: authReducer,
  forProfile: profileReducer,
  forNavbar: navBarReducer,
  forDialogs: messageReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;

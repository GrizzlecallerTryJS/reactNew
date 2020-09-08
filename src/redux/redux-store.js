import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';

import postReducer from './Post-Reducer';
import messageReducer from './Message-Reducer';
import navBarReducer from './NavBar-Reducer';
import usersReducer from './Users-Reducer';
import profileReducer from './Profile-Reducer';
import authReducer from './Auth-Reducer';
import thunkMiddleware from 'redux-thunk';
import headerReducer from './Header-Reducer';
import appReducer from './App-Reducer';

let reducers = combineReducers({
  forPosts: postReducer,
  form: formReducer,
  forUsers: usersReducer,
  forAuth: authReducer,
  forProfile: profileReducer,
  forNavbar: navBarReducer,
  forDialogs: messageReducer,
  forHeder: headerReducer,
  forApp: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;

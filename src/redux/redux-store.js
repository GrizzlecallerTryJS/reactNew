import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
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
  forPosts   : postReducer,
  form       : formReducer,
  forUsers   : usersReducer,
  forAuth    : authReducer,
  forProfile : profileReducer,
  forNavbar  : navBarReducer,
  forDialogs : messageReducer,
  forHeder   : headerReducer,
  forApp     : appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;

export default store;

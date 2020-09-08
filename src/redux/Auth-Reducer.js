import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_AUTH_USER_IMAGE = 'SET-AUTH-USER-IMAGE';

let initState = {
  id: null,
  email: null,
  login: null,
  isFetching: true,
  isAuth: false,
  authUserImage: null,
};

const authReducer = (state = initState, action) => {
  let stateCopy = state;

  let _setAuthUserData = (payload) => {
    stateCopy = {
      ...payload,
    };
  };

  let _setIsFetching = (isFetching) => {
    stateCopy = {
      ...state,
      isFetching: isFetching,
    };
  };

  let _setAuthUserImage = (authUserImage) => {
    stateCopy = {
      ...state,
      authUserImage: authUserImage,
    };
  };

  if (action.type === SET_USER_DATA) {
    _setAuthUserData(action.payload);
  } else if (action.type === SET_IS_FETCHING) {
    _setIsFetching(action.isFetching);
  } else if (action.type === SET_AUTH_USER_IMAGE) {
    _setAuthUserImage(action.authUserImage);
  }

  return stateCopy;
};

export const setAuthUserData = (id, login, email, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: {
      id,
      login,
      email,
      isAuth,
    },
  };
};

export const getAuthUserData = () => (dispatch) => {
  dispatch(setIsFetching(true));
  return authAPI.getAuthMe().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setIsFetching(false));
      let { id, login, email } = data.data;
      dispatch(setAuthUserData(id, login, email, true));
    }
  });
};

export const authLoginUser = (email, password, rememberMe = false) => (dispatch) => {
  dispatch(setIsFetching(true));
  authAPI.authLogin(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setIsFetching(false));
      dispatch(getAuthUserData());
    } else {
      let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Something Wrong';
      dispatch(stopSubmit('loginForm', { _error: errorMessage }));
    }
  });
};

export const authLogoutUser = () => (dispatch) => {
  dispatch(setIsFetching(true));
  authAPI.authLogout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setIsFetching(false));
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export const setAuthUserImage = (authUserImage) => {
  return {
    type: SET_AUTH_USER_IMAGE,
    authUserImage: authUserImage,
  };
};

export const setIsFetching = (isFetching) => {
  return {
    type: SET_IS_FETCHING,
    isFetching: isFetching,
  };
};

export default authReducer;

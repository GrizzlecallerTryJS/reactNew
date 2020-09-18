import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import { createSelector } from 'reselect';

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

  if (action.type === SET_USER_DATA)
  {
    _setAuthUserData(action.payload);
  } else if (action.type === SET_IS_FETCHING)
  {
    _setIsFetching(action.isFetching);
  } else if (action.type === SET_AUTH_USER_IMAGE)
  {
    _setAuthUserImage(action.authUserImage);
  }

  return stateCopy;
};

/* Action crators */

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

/* Thunk crators */

/* export const getAuthUserData = () => (dispatch) => {
  dispatch(setIsFetching(true));
  return authAPI.getAuthMe().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setIsFetching(false));
      let { id, login, email } = data.data;
      dispatch(setAuthUserData(id, login, email, true));
    }
  });
}; */

export const getAuthUserData = () => async (dispatch) => {
  dispatch(setIsFetching(true));
  let response = authAPI.getAuthMe();
  if (response.resultCode === 0)
  {
    dispatch(setIsFetching(false));
    let { id, login, email } = response.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};


export const authLoginUser = (email, password, rememberMe = false) => (dispatch) => {
  dispatch(setIsFetching(true));
  authAPI.authLogin(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0)
    {
      dispatch(setIsFetching(false));
      dispatch(getAuthUserData());
    } else
    {
      let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Something Wrong';
      dispatch(stopSubmit('loginForm', { _error: errorMessage }));
    }
  });
};

export const authLogoutUser = () => (dispatch) => {
  dispatch(setIsFetching(true));
  authAPI.authLogout().then((data) => {
    if (data.resultCode === 0)
    {
      dispatch(setIsFetching(false));
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

/* Getters */

const _getAuth = (state) => {
  return state.forAuth.isAuth;
};

const _getAuthId = (state) => {
  return state.forAuth.id;
};

const _getAuthLogin = (state) => {
  return state.forAuth.login;
};

const _getAuthUserImage = (state) => {
  return state.forAuth.authUserImage;
};

export const getAuth = createSelector(_getAuth, (isAuth) => isAuth);
export const getAuthId = createSelector(_getAuthId, (id) => id);
export const getAuthLogin = createSelector(_getAuthLogin, (login) => login);
export const getAuthUserImage = createSelector(_getAuthUserImage, (authUserImage) => authUserImage);

export default authReducer;

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

  let _setAuthUserData = (id, login, email) => {
    debugger;
    stateCopy = {
      ...id,
      ...login,
      ...email,
      isAuth: true,
      image: null,
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
    _setAuthUserData(action.userData);
  } else if (action.type === SET_IS_FETCHING) {
    _setIsFetching(action.isFetching);
  } else if (action.type === SET_AUTH_USER_IMAGE) {
    _setAuthUserImage(action.authUserImage);
  }

  return stateCopy;
};

export const setAuthUserData = (id, login, email) => {
  return {
    type: SET_USER_DATA,
    userData: {
      id,
      login,
      email,
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

export default authReducer;

const SET_USER_DATA = 'SET-USER-DATA';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

let initState = {
  id: null,
  email: null,
  login: null,
  isFetching: true,
  isAuth: false,
  image: null,
};

const authReducer = (state = initState, action) => {
  let stateCopy = state;

  let _setAuthUserData = (id, login, email, image) => {
    debugger;
    stateCopy = {
      ...id,
      ...login,
      ...email,
      ...image,
      isAuth: true,
    };
  };

  let _setIsFetching = (isFetching) => {
    stateCopy = {
      ...state,
      isFetching: isFetching,
    };
  };

  if (action.type === SET_USER_DATA) {
    _setAuthUserData(action.userData);
  } else if (action.type === SET_IS_FETCHING) {
    _setIsFetching(action.isFetching);
  }

  return stateCopy;
};

export const setAuthUserData = (id, login, email, image) => {
  return {
    type: SET_USER_DATA,
    userData: {
      id,
      login,
      email,
      image,
    },
  };
};

/* export const setAuthUserData = (userData) => {
  return {
    type: SET_USER_DATA,
    userData: userData,
  };
}; */

export const setIsFetching = (isFetching) => {
  return {
    type: SET_IS_FETCHING,
    isFetching: isFetching,
  };
};

export default authReducer;

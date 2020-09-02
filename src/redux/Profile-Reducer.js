import { profileAPI } from '../api/api';

const SET_COMMON_USER_PROFILE = 'SET-COMMON_USER_DATA';
const SET_IS_FETCHNG = 'SET-IS-FETCHNG';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initState = {
  aboutMe: null,
  contacts: {
    facebook: null,
    website: null,
    vk: null,
    twitter: null,
    instagram: null,
    youtube: null,
    github: null,
    mainLink: null,
  },
  lookingForAJob: null,
  lookingForAJobDescription: null,
  fullName: null,
  userId: null,
  photos: {
    small: null,
    large: null,
  },
  isFetching: false,
  status: 'initStateStatus',
};
const profileReducer = (state = initState, action) => {
  let stateCopy = state;

  let _setCommonUserProfile = (userData) => {
    stateCopy = {
      ...userData,
      contacts: { ...userData.contacts },
      photos: { ...userData.photos },
    };
  };

  let _isFetching = (isFetching) => {
    stateCopy = {
      ...state,
      isFetching: isFetching,
    };
  };

  let _setUserStatus = (status) => {
    stateCopy = {
      ...state,
      status: status,
    };
  };

  if (action.type === SET_COMMON_USER_PROFILE) {
    _setCommonUserProfile(action.userProfile);
  } else if (action.type === SET_IS_FETCHNG) {
    _isFetching(action.isFetching);
  } else if (action.type === SET_USER_STATUS) {
    _setUserStatus(action.status);
  }

  return stateCopy;
};

export const setCommonUserProfile = (userProfile) => {
  return {
    type: SET_COMMON_USER_PROFILE,
    userProfile: userProfile,
  };
};

export const setIsFetching = (isFetching) => {
  return {
    type: SET_IS_FETCHNG,
    isFetching: isFetching,
  };
};

export const setUserStatus = (status) => {
  return {
    type: SET_USER_STATUS,
    status: status,
  };
};

export const getUserProfile = (userId) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));

    profileAPI.getUserProfile(userId).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setCommonUserProfile(data));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));

    profileAPI.getUserStatus(userId).then((response) => {
      dispatch(setIsFetching(false));
      dispatch(setUserStatus(response));
    });
  };
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));

    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setIsFetching(false));
        dispatch(setUserStatus(status));
      }
    });
  };
};

export default profileReducer;

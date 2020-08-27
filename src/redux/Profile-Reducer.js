import { usersAPI } from '../api/api';

const SET_COMMON_USER_PROFILE = 'SET-COMMON_USER_DATA';
const SET_IS_FETCHNG = 'SET-IS-FETCHNG';

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

  if (action.type === SET_COMMON_USER_PROFILE) {
    _setCommonUserProfile(action.userProfile);
  } else if (action.type === SET_IS_FETCHNG) {
    _isFetching(action.isFetching);
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

export const getUserProfile = (userId) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    //let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    usersAPI.getUserProfile(userId).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setCommonUserProfile(data));
    });
  };
};

export default profileReducer;

import { createSelector } from 'reselect';
import { profileAPI } from '../api/api';

const SET_COMMON_USER_PROFILE = 'SET-COMMON_USER_DATA';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_USER_STATUS = 'SET-USER-STATUS';
const GET_ALL_USER_DATA_SUCCESS = 'GET-ALL-USER-DATA-SUCCESS';

let initState = {
  userData         : {
    aboutMe                   : null,
    contacts                  : {
      facebook  : null,
      website   : null,
      vk        : null,
      twitter   : null,
      instagram : null,
      youtube   : null,
      github    : null,
      mainLink  : null,
    },
    lookingForAJob            : null,
    lookingForAJobDescription : null,
    fullName                  : null,
    userId                    : null,
    photos                    : {
      small : null,
      large : null,
    },
  },
  isFetching       : false,
  status           : 'initStateStatus',
  allUserDataState : false,
};
const profileReducer = (state = initState, action) => {
  let stateCopy = state;

  let _setCommonUserProfile = (userData) => {
    stateCopy = {
      ...state,
      userData : userData,
      contacts : { ...userData.contacts },
      photos   : { ...userData.photos },
    };
  };

  let _isFetching = (isFetching) => {
    stateCopy = {
      ...state,
      isFetching : isFetching,
    };
  };

  let _setUserStatus = (status) => {
    stateCopy = {
      ...state,
      status : status,
    };
  };

  let _getAllUserDataSuccess = (success) => {
    stateCopy = {
      ...state,
      allUserDataState : success,
    };
  };

  if (action.type === SET_COMMON_USER_PROFILE) {
    _setCommonUserProfile(action.userProfile);
  } else if (action.type === SET_IS_FETCHING) {
    _isFetching(action.isFetching);
  } else if (action.type === SET_USER_STATUS) {
    _setUserStatus(action.status);
  } else if (action.type === GET_ALL_USER_DATA_SUCCESS) {
    _getAllUserDataSuccess(true);
  }

  return stateCopy;
};

/* Action creators */

export const setCommonUserProfile = (userProfile) => {
  return {
    type        : SET_COMMON_USER_PROFILE,
    userProfile : userProfile,
  };
};

export const setIsFetching = (isFetching) => {
  return {
    type       : SET_IS_FETCHING,
    isFetching : isFetching,
  };
};

export const setUserStatus = (status) => {
  return {
    type   : SET_USER_STATUS,
    status : status,
  };
};

export const getAllUserDataSuccess = () => {
  return {
    type : GET_ALL_USER_DATA_SUCCESS,
  };
};

/* Thunk creators */

const getUserProfile = (userId) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));

    return profileAPI.getUserProfile(userId).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setCommonUserProfile(data));
    });
  };
};

const getUserStatus = (userId) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));

    return profileAPI.getUserStatus(userId).then((response) => {
      dispatch(setIsFetching(false));
      dispatch(setUserStatus(response));
    });
  };
};

export const getAllUserData = (userId) => (dispatch) => {
  let userProfile = dispatch(getUserProfile(userId));
  let userStatus = dispatch(getUserStatus(userId));
  Promise.all([
    userProfile,
    userStatus,
  ]).then(() => {
    dispatch(getAllUserDataSuccess());
  });
};

export const updateUserStatus = (status) => async (dispatch) => {
  dispatch(setIsFetching(true));
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setIsFetching(false));
    dispatch(setUserStatus(status));
  }
};

/* Getters */

const _getUserData = (state) => {
  return state.forProfile.userData;
};

const _getStatus = (state) => {
  return state.forProfile.status;
};

const _getIsFetching = (state) => {
  return state.forProfile.isFetching;
};

const _getAllUserDataState = (state) => {
  return state.forProfile.allUserDataState;
};

export const getUserData = createSelector(_getUserData, (data) => data);
export const getStatus = createSelector(_getStatus, (status) => status);
export const getIsFetching = createSelector(_getIsFetching, (fetching) => fetching);
export const getAllUserDataState = createSelector(_getAllUserDataState, (state) => state);

export default profileReducer;

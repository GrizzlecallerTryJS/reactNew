const SET_COMMON_USER_PROFILE = 'SET-COMMON_USER_DATA';

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

  if (action.type === SET_COMMON_USER_PROFILE) {
    _setCommonUserProfile(action.userProfile);
  }

  return stateCopy;
};

export const setCommonUserProfileAC = (userProfile) => {
  return {
    type: SET_COMMON_USER_PROFILE,
    userProfile: userProfile,
  };
};

export default profileReducer;

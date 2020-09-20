import { authAPI, profileAPI } from '../api/api';
import defaultImage from '../assets/defaultImage.jpg';
import { setAuthUserData, setIsFetching, setAuthUserImage } from '../redux/Auth-Reducer';

const initState = {};

const headerReducer = (state = initState, action) => {
  let stateCopy = state;

  return stateCopy;
};

export const getHeader = () => async (dispatch) => {
  dispatch(setIsFetching(true));
  let response = await authAPI.getAuthMe();
  if (response.resultCode === 0) {
    dispatch(setIsFetching(false));
    let { id, login, email } = response.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
  let response1 = await profileAPI.getUserProfile(response.data.id);
  !response1.photos.small
    ? dispatch(setAuthUserImage(defaultImage))
    : dispatch(setAuthUserImage(response1.photos.small));
};

export default headerReducer;

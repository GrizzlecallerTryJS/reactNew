import { usersAPI } from '../api/api';
import defaultImage from '../assets/defaultImage.jpg';
import { setAuthUserData, setIsFetching, setAuthUserImage } from '../redux/Auth-Reducer';

const initState = {};

const headerReducer = (state = initState, action) => {
  let stateCopy = state;

  return stateCopy;
};

export const getHeader = () => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setIsFetching(false));
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email));
      }
      usersAPI.getUserProfile(data.data.id).then((data) => {
        !data.photos.small ? dispatch(setAuthUserImage(defaultImage)) : dispatch(setAuthUserImage(data.photos.small));
      });
    });
  };
};

export default headerReducer;

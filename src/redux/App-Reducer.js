import { getAuthUserData } from './Auth-Reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initState = {
  initialized: false,
};

const appReducer = (state = initState, action) => {
  let stateCopy = state;

  const _setInitialized = (init) => {
    stateCopy = {
      ...state,
      initialized: init,
    };
  };

  if (action.type === INITIALIZED_SUCCESS) {
    _setInitialized(true);
  }
  return stateCopy;
};

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([
    promise,
  ]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;

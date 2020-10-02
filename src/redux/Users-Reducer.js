import { usersAPI } from '../api/api';

const FOLLOW_BUTTON = 'FOLLOW-BUTTON';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const FOLLOWING_PROGRESS = 'FOLLOWING-PROGRESS';
const READY_TO_MOUNT = 'READY-TO-MOUNT';

let initState = {
  users                  : [],
  pageSize               : 8,
  totalUsersCount        : 0,
  currentPage            : 1,
  isFetching             : false,
  followingProgressState : [],
  itemsForPaginator      : 10,
  componentReadyToMount  : false,
};

const usersReducer = (state = initState, action) => {
  let stateCopy = state;

  const _followButton = (id) => {
    stateCopy = {
      ...state,
      users : state.users.map((u) => u),
    };

    stateCopy.users.map((user) => {
      if (user.id === id && user.followed === false) {
        return (user.followed = true);
      } else if (user.id === id && user.followed === true) {
        return (user.followed = false);
      }
    });
  };

  let _setUsers = (newUsers) => {
    stateCopy = {
      ...state,
      users : newUsers,
    };
  };

  let _setRequestedPage = (pageNumber) => {
    stateCopy = { ...state, currentPage: pageNumber };
  };

  let _setTotalUsersCount = (totalCount) => {
    stateCopy = { ...state, totalUsersCount: totalCount };
  };

  let _setIsFetching = (isFetching) => {
    stateCopy = { ...state, isFetching: isFetching };
  };

  let _followingProgress = (isFetching, id) => {
    stateCopy = {
      ...state,
      followingProgressState : isFetching
        ? [
            ...state.followingProgressState,
            id,
          ]
        : [
            ...state.followingProgressState.filter((id) => id !== action.userId),
          ],
    };
  };

  let _componentReadyToMount = (success) => {
    stateCopy = {
      ...state,
      componentReadyToMount : success,
    };
  };

  if (action.type === FOLLOW_BUTTON) {
    _followButton(action.id);
  } else if (action.type === SET_USERS) {
    _setUsers(action.users);
  } else if (action.type === SET_CURRENT_PAGE) {
    _setRequestedPage(action.currentPage);
  } else if (action.type === SET_TOTAL_USERS_COUNT) {
    _setTotalUsersCount(action.totalUsersCount);
  } else if (action.type === TOGGLE_IS_FETCHING) {
    _setIsFetching(action.isFetching);
  } else if (action.type === FOLLOWING_PROGRESS) {
    _followingProgress(action.isFetching, action.userId);
  } else if (action.READY_TO_MOUNT) {
    _componentReadyToMount(true);
  }

  return stateCopy;
};

/* Action creators */

export const followButton = (id) => {
  return {
    type : FOLLOW_BUTTON,
    id   : id,
  };
};

export const setUsers = (newUsers) => {
  return {
    type  : SET_USERS,
    users : newUsers,
  };
};

export const setRequestedPage = (pageNumber) => {
  return {
    type        : SET_CURRENT_PAGE,
    currentPage : pageNumber,
  };
};

export const setTotalUsersCount = (totalCount) => {
  return {
    type            : SET_TOTAL_USERS_COUNT,
    totalUsersCount : totalCount,
  };
};

export const setIsFetching = (isFetching) => {
  return {
    type       : TOGGLE_IS_FETCHING,
    isFetching : isFetching,
  };
};

export const followingProgress = (isFetching, userId) => {
  return {
    type       : FOLLOWING_PROGRESS,
    isFetching : isFetching,
    userId     : userId,
  };
};

export const componentReadyToMount = () => {
  return {
    type : READY_TO_MOUNT,
  };
};

/* Action creators END */

/* Thunk creators */

export const requestUsers = (requestedPage, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true));
  dispatch(setRequestedPage(requestedPage));
  let response = await usersAPI.getUsers(requestedPage, pageSize);
  dispatch(setIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
};

export const requestUsersPage = (pageNumber, pageSize) => async (dispatch) => {
  dispatch(setRequestedPage(pageNumber));
  dispatch(setIsFetching(true));
  let response = await usersAPI.getUsers(pageNumber, pageSize);
  dispatch(setIsFetching(false));
  dispatch(setUsers(response.items));
};

/* export const follow = (userID) => async (dispatch) => {
  dispatch(followingProgress(true, userID));
  let response = await usersAPI.followUser(userID);
  if (response.resultCode === 0) {
    dispatch(followButton(userID));
    dispatch(followingProgress(false, userID));
  }
};

export const unFollow = (userID) => async (dispatch) => {
  dispatch(followingProgress(true, userID));
  let response = await usersAPI.unFollowUser(userID);
  if (response.resultCode === 0) {
    dispatch(followButton(userID));
    dispatch(followingProgress(false, userID));
  }
}; */

export const followUnfollow = (userID, followed) => async (dispatch) => {
  dispatch(followingProgress(true, userID));
  let apiMethod;
  followed ? (apiMethod = usersAPI.unFollowUser(userID)) : (apiMethod = usersAPI.followUser(userID));
  let response = await apiMethod;
  if (response.resultCode === 0) {
    dispatch(followButton(userID));
    dispatch(followingProgress(false, userID));
  }
};

export const readyToMount = (requestedPage, pageSize) => (dispatch) => {
  let users = dispatch(requestUsers(requestedPage, pageSize));
  let usersPage = dispatch(requestUsersPage(requestedPage, pageSize));
  Promise.all([
    users,
    usersPage,
  ]).then(() => {
    dispatch(componentReadyToMount());
  });
};

/* Thunk creators  END */

/* Getters */

export const getUsersOnPage = (state) => {
  return state.forUsers.users;
};

export const getPageSize = (state) => {
  return state.forUsers.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.forUsers.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.forUsers.currentPage;
};

export const getFetching = (state) => {
  return state.forUsers.isFetching;
};

export const getFollowingProgressState = (state) => {
  return state.forUsers.followingProgressState;
};

export const getItemsForPaginator = (state) => {
  return state.forUsers.itemsForPaginator;
};

export const getComponentReadyToMountState = (state) => {
  return state.forUsers.componentReadyToMount;
};

export default usersReducer;

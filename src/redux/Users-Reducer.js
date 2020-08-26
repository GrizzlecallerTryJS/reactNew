import { usersAPI } from '../api/api';

const FOLLOW_BUTTON = 'FOLLOW-BUTTON';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const FOLLOWING_PROGRESS = 'FOLLOWING-PROGRESS';

let initState = {
  users: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgressState: [],
};

const usersReducer = (state = initState, action) => {
  let stateCopy = state;

  const _followButton = (id) => {
    stateCopy = {
      ...state,
      users: state.users.map((u) => u),
    };

    state.users.map((user) => {
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
      users: newUsers,
    };
  };

  let _setCurrentPage = (pageNumber) => {
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
      followingProgressState: isFetching
        ? [
            ...state.followingProgressState,
            id,
          ]
        : [
            ...state.followingProgressState.filter((id) => id !== action.userId),
          ],
    };
  };

  if (action.type === FOLLOW_BUTTON) {
    _followButton(action.id);
  } else if (action.type === SET_USERS) {
    _setUsers(action.users);
  } else if (action.type === SET_CURRENT_PAGE) {
    _setCurrentPage(action.currentPage);
  } else if (action.type === SET_TOTAL_USERS_COUNT) {
    _setTotalUsersCount(action.totalUsersCount);
  } else if (action.type === TOGGLE_IS_FETCHING) {
    _setIsFetching(action.isFetching);
  } else if (action.type === FOLLOWING_PROGRESS) {
    _followingProgress(action.isFetching, action.userId);
  }

  return stateCopy;
};

export const followButton = (id) => {
  return {
    type: FOLLOW_BUTTON,
    id: id,
  };
};

export const setUsers = (newUsers) => {
  return {
    type: SET_USERS,
    users: newUsers,
  };
};

export const setCurrentPage = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: pageNumber,
  };
};

export const setTotalUsersCount = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalCount,
  };
};

export const setIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  };
};

export const followingProgress = (isFetching, userId) => {
  return {
    type: FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId,
  };
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const getUsersPage = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(setIsFetching(true));
    usersAPI.getUsers(pageNumber, pageSize).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
    });
  };
};

export const follow = (userID) => {
  return (dispatch) => {
    dispatch(followingProgress(true, userID));
    usersAPI.followUser(userID).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followButton(userID));
        dispatch(followingProgress(false, userID));
      }
    });
  };
};

export const unFollow = (userID) => {
  return (dispatch) => {
    dispatch(followingProgress(true, userID));
    usersAPI.unFollowUser(userID).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followButton(userID));
        dispatch(followingProgress(false, userID));
      }
    });
  };
};

export default usersReducer;

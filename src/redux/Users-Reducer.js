const FOLLOW_BUTTON = 'FOLLOW-BUTTON';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initState = {
  users: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
};

const usersReducer = (state = initState, action) => {
  let stateCopy = state;

  const _followButton = (id) => {
    stateCopy = {
      ...state,
      users: state.users.map((u) => u),
    };

    state.users.map((user) => {
      //return user.id === id && user.followed === false ? (user.followed = true) : (user.followed = false);
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

export default usersReducer;

const FOLLOW_BUTTON = 'FOLLOW-BUTTON';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initState = {
  users: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 1,
};

const usersReducer = (state = initState, action) => {
  let stateCopy = state;

  const _followButton = (id) => {
    stateCopy = {
      ...state,
      users: state.users.map((u) => u),
    };

    state.users.map((user) => {
      return user.id === id && user.followed === false ? (user.followed = true) : (user.followed = false);
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

  if (action.type === FOLLOW_BUTTON) {
    _followButton(action.id);
  } else if (action.type === SET_USERS) {
    _setUsers(action.users);
  } else if (action.type === SET_CURRENT_PAGE) {
    _setCurrentPage(action.currentPage);
  } else if (action.type === SET_TOTAL_USERS_COUNT) {
    _setTotalUsersCount(action.totalUsersCount);
  }

  return stateCopy;
};

export const followButtonAC = (id) => {
  return {
    type: FOLLOW_BUTTON,
    id: id,
  };
};

export const setUsersAC = (newUsers) => {
  return {
    type: SET_USERS,
    users: newUsers,
  };
};

export const setCurrentPageAC = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: pageNumber,
  };
};

export const setTotalUsersCountAC = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalCount,
  };
};

export default usersReducer;

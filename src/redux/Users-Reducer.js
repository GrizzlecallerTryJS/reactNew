const FOLLOW_BUTTON = 'FOLLOW-BUTTON';
const SET_USERS = 'SET-USERS';

let initState = {
  users: [],
};

const usersReducer = (state = initState, action) => {
  let stateCopy = state;

  const _followButton = (id) => {
    stateCopy = {
      ...state,
      users: state.users.map((u) => u),
    };
    stateCopy.users[id - 1].followed === false
      ? (stateCopy.users[id - 1].followed = true)
      : (stateCopy.users[id - 1].followed = false);
  };

  let _setUsers = (newUsers) => {
    stateCopy = {
      ...state,
      users: [
        ...state.users,
        ...newUsers,
      ],
    };
  };

  if (action.type === FOLLOW_BUTTON) {
    _followButton(action.id);
  } else if (action.type === SET_USERS) {
    _setUsers(action.users);
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

export default usersReducer;

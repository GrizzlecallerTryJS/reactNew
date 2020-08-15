const FOLLOW_BUTTON = 'FOLLOW-BUTTON';
const SET_USERS = 'SET-USERS';

const initialState = {
  users: [] /* [
    {
      id: 1,
      avatar: '',
      followed: false,
      fullName: 'Carl',
      status: 'Adipisicing pariatur .',
      location: { city: 'Moscow', country: 'Russia' },
    },
    {
      id: 2,
      avatar: '',
      followed: true,
      fullName: 'Donald',
      status: 'Laboris sunt adipisicing.',
      location: { city: 'Kazan', country: 'Russia' },
    },
    {
      id: 3,
      avatar: '',
      followed: false,
      fullName: 'Edward',
      status: 'Duis nostrud nulla.',
      location: { city: 'Minsk', country: 'Belarus' },
    },
    {
      id: 4,
      avatar: '',
      followed: true,
      fullName: 'Graham',
      status: 'Do dolore velit fugiat.',
      location: { city: 'Los-Angeles', country: 'US' },
    },
    {
      id: 5,
      avatar: '',
      followed: false,
      fullName: 'Hunter',
      status: 'Sunt voluptate officia.',
      location: { city: 'Chikago', country: 'US' },
    },
    {
      id: 6,
      avatar: '',
      followed: true,
      fullName: 'James',
      status: 'Deserunt labore veniam.',
      location: { city: 'Detroit', country: 'US' },
    },
  ], */,
};

const usersReducer = (state = initialState, action) => {
  let stateCopy = state;

  const _followButton = (id) => {
    stateCopy = {
      ...state,
      users: state.users.map((u) => u),
    };
    if (!stateCopy.users[id - 1].followed) {
      stateCopy.users[id - 1].followed = true;
    } else {
      stateCopy.users[id - 1].followed = false;
    }
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
    _setUsers(action.newUsers);
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
    newUsers: newUsers,
  };
};

export default usersReducer;

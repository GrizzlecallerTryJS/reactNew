let initialState = {
  navbarData: [
    { id: 1, article: 'Profile', path: '/profile' },
    { id: 2, article: 'Messages', path: '/messages' },
    { id: 3, article: 'News', path: '/news' },
    { id: 4, article: 'Music', path: '/music' },
    { id: 5, article: 'Settings', path: '/settings' },
    { id: 6, article: 'Friends', path: '/friends' },
    { id: 7, article: 'Users', path: '/users' },
  ],
};

const navBarReducer = (state = initialState, action) => {
  return state;
};

export default navBarReducer;

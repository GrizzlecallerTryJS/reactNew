import Render from '../Render';

let state = {
  forDialogs: {
    dialogsData: [
      {
        id: 1,
        name: 'Aaron',
        avatar:
          'https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-man-avatar-social-responsibility-vector-png-image_4822946.jpg',
      },
      {
        id: 2,
        name: 'Bernard',
        avatar:
          'https://thumbs.dreamstime.com/z/man-mustache-male-avatar-cartoon-social-media-icon-isolated-flat-illustration-vector-graphic-76950613.jpg',
      },
      {
        id: 3,
        name: 'Christopher',
        avatar:
          'https://n1.nextpng.com/sticker-png/664/825/sticker-png-social-media-icons-avatar-male-man-female-face-facial-hair-facial-expression.png',
      },
      { id: 4, name: 'Dylan', avatar: 'https://www.colourbox.com/preview/22295197-avatar-man-icon.jpg' },
    ],

    messagesData: [
      { id: 1, text: 'Sint duis nisi pariatur duis irure quis labore ut eiusmod in quis.' },
      { id: 2, text: 'Do est occaecat elit elit in voluptate exercitation quis exercitation magna ea ullamco.' },
      { id: 3, text: 'Laborum dolor anim Lorem ullamco veniam ad ea.' },
      { id: 4, text: 'Ad elit ea id reprehenderit reprehenderit nisi culpa esse eiusmod ut.' },
      { id: 5, text: 'Quis laboris irure ullamco dolore nostrud.' },
      { id: 6, text: 'Eu dolor nulla esse fugiat ea non est consequat ad exercitation.' },
      { id: 7, text: 'Est laboris sit elit magna veniam nostrud mollit duis minim.' },
    ],
  },
  forPosts: {
    postData: [
      { id: 1, message: 'BEEP', likeCount: 15 },
      { id: 2, message: 'BOOP', likeCount: 20 },
      { id: 3, message: 'BOOP', likeCount: 20 },
      { id: 4, message: 'I', likeCount: 20 },
      { id: 5, message: 'AM', likeCount: 20 },
      { id: 6, message: 'A', likeCount: 20 },
      { id: 7, message: 'ROBOT', likeCount: 20 },
    ],
  },
  forNavbar: {
    navbarData: [
      { id: 1, article: 'Profile', path: '/profile' },
      { id: 2, article: 'Messages', path: '/messages' },
      { id: 3, article: 'News', path: '/news' },
      { id: 4, article: 'Music', path: '/music' },
      { id: 5, article: 'Settings', path: '/settings' },
      { id: 6, article: 'Friends', path: '/friends' },
    ],
  },
  forApp: {
    appData: [
      { appData_id: 1, component: 'DialogsCaller', path: '/messages', route: true },
      { appData_id: 2, component: 'ProfileCaller', path: '/profile', route: true },
      { appData_id: 3, component: 'News', path: '/news', route: true },
      { appData_id: 4, component: 'Music', path: '/music', route: true },
      { appData_id: 5, component: 'Settings', path: '/settings', route: true },
      { appData_id: 6, component: 'Friends', path: '/friends', route: true },
      { appData_id: 7, component: 'HeaderCaller', path: null, route: false },
      { appData_id: 8, component: 'NavbarCaller', path: null, route: false },
    ],
  },
};

export const addPost = (postMessage) => {
  const newId = state.forPosts.postData[state.forPosts.postData.length - 1].id + 1;
  let newPost = {
    id: newId,
    message: postMessage,
    likeCount: 0,
  };
  state.forPosts.postData.push(newPost);
  Render(state, addPost);
};

export default state;

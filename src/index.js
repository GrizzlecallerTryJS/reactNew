import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
  { id: 1, name: 'Aaron' },
  { id: 2, name: 'Bernard' },
  { id: 3, name: 'Christopher' },
  { id: 4, name: 'Dylan' },
];

let messagesData = [
  { id: 1, text: 'Sint duis nisi pariatur duis irure quis labore ut eiusmod in quis.' },
  { id: 2, text: 'Do est occaecat elit elit in voluptate exercitation quis exercitation magna ea ullamco.' },
  { id: 3, text: 'Laborum dolor anim Lorem ullamco veniam ad ea.' },
  { id: 4, text: 'Ad elit ea id reprehenderit reprehenderit nisi culpa esse eiusmod ut.' },
  { id: 5, text: 'Quis laboris irure ullamco dolore nostrud.' },
  { id: 6, text: 'Eu dolor nulla esse fugiat ea non est consequat ad exercitation.' },
  { id: 7, text: 'Est laboris sit elit magna veniam nostrud mollit duis minim.' },
];

let postData = [
  { id: 1, message: 'BEEP', likeCount: 15 },
  { id: 2, message: 'BOOP', likeCount: 20 },
  { id: 3, message: 'BOOP', likeCount: 20 },
  { id: 4, message: 'I', likeCount: 20 },
  { id: 5, message: 'AM', likeCount: 20 },
  { id: 6, message: 'A', likeCount: 20 },
  { id: 7, message: 'ROBOT', likeCount: 20 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postData={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

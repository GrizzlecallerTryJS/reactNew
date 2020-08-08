import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, likeButtonCounter, updateNewPostText } from './redux/state';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        updateNewPostText={updateNewPostText}
        addPost={addPost}
        likeButtonCounter={likeButtonCounter}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

export { rerenderEntireTree };

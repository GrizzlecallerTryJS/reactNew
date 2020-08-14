import React from 'react';
import MyPosts from './MyPosts';
import { updateNewPostTextAC, addPostAC, likeButtonCounterAC } from '../../../redux/Post-Reducer';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {
  /* let store = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostAC());
  };

  let textAreaUpdateText = (text) => {
    props.store.dispatch(updateNewPostTextAC(text));
  };

  const likeButtonCounter = (id) => {
    return props.store.dispatch(likeButtonCounterAC(id));
  }; */

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().forPosts;

        let addPost = () => {
          store.dispatch(addPostAC());
        };

        let textAreaUpdateText = (text) => {
          store.dispatch(updateNewPostTextAC(text));
        };

        const likeButtonCounter = (id) => {
          return store.dispatch(likeButtonCounterAC(id));
        };

        return (
          <MyPosts
            postData={state.postData}
            newPostText={state.newPostText}
            addPost={addPost}
            textAreaUpdateText={textAreaUpdateText}
            likeButtonCounter={likeButtonCounter}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;

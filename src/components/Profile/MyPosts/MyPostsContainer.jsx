import React from 'react';
import MyPosts from './MyPosts';
import { updateNewPostTextAC, addPostAC, likeButtonCounterAC } from '../../../redux/Post-Reducer';

const MyPostsContainer = (props) => {
  let store = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostAC());
  };

  let textAreaUpdateText = (text) => {
    props.store.dispatch(updateNewPostTextAC(text));
  };

  const likeButtonCounter = (id) => {
    return props.store.dispatch(likeButtonCounterAC(id));
  };

  return (
    <MyPosts
      postData={store.forPosts.postData}
      newPostText={store.forPosts.newPostText}
      addPost={addPost}
      textAreaUpdateText={textAreaUpdateText}
      likeButtonCounter={likeButtonCounter}
    />
  );
};

export default MyPostsContainer;

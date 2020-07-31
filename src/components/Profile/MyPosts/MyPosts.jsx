import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={styles.posts}>
      <div>MyPosts component below</div>
      <div>----------</div>
      <div>New Post</div>
      <div>
        <textarea>Input here</textarea>
        <button>add post</button>
      </div>
      <Post message='Hi' likeCount={'15'} />
      <Post message='Boop' likeCount={'20'} />
    </div>
  );
};
export default MyPosts;

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
      {/* <div>
        <div>Post_1</div>
        <div>Post_2</div>
      </div> */}
      <Post message='Hi' />
      <Post message='Boop' />
    </div>
  );
};
export default MyPosts;

import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postData = props.postData;
  const PostMap = postData.map((post) => {
    return <Post id={post.id} message={post.message} likeCount={post.likeCount} />;
  });

  return (
    <div>
      <div>
        <div>MyPosts component below</div>
        <div>----------</div>
        <div>
          <h2>My Post</h2>
        </div>
      </div>
      <div className={styles.text_area}>
        <div>
          <textarea>Input here</textarea>
        </div>
        <div>
          <button>add post</button>
        </div>
      </div>
      <div className={styles.posts}>{PostMap}</div>
    </div>
  );
};
export default MyPosts;

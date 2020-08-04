import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postData = [
    { id: 1, message: 'BEEP', likeCount: 15 },
    { id: 2, message: 'BOOP', likeCount: 20 },
    { id: 3, message: 'BOOP', likeCount: 20 },
    { id: 4, message: 'I', likeCount: 20 },
    { id: 5, message: 'AM', likeCount: 20 },
    { id: 6, message: 'A', likeCount: 20 },
    { id: 7, message: 'ROBOT', likeCount: 20 },
  ];

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

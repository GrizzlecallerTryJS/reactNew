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
      <div className={styles.posts}>
        <Post id={postData[0].id} message={postData[0].message} likeCount={postData[0].likeCount} />
        <Post id={postData[1].id} message={postData[1].message} likeCount={postData[1].likeCount} />
        <Post id={postData[2].id} message={postData[2].message} likeCount={postData[2].likeCount} />
        <Post id={postData[3].id} message={postData[3].message} likeCount={postData[3].likeCount} />
        <Post id={postData[4].id} message={postData[4].message} likeCount={postData[4].likeCount} />
        <Post id={postData[5].id} message={postData[5].message} likeCount={postData[5].likeCount} />
        <Post id={postData[6].id} message={postData[6].message} likeCount={postData[6].likeCount} />
      </div>
    </div>
  );
};
export default MyPosts;

import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postData = props.postData;

  const PostMap = postData.map((post) => {
    return (
      <Post
        id={post.id}
        message={post.message}
        liked={post.liked}
        likeCount={post.likeCount}
        likeButtonCounter={props.likeButtonCounter}
      />
    );
  });

  let addPost = () => {
    //props.dispatch(addPostAC());
    props.addPost();
  };

  let updateNewPostText = (element) => {
    let text = element.target.value;
    props.textAreaUpdateText(text);
  };

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
          <textarea onChange={updateNewPostText} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>add post</button>
        </div>
      </div>
      <div className={styles.posts}>{PostMap}</div>
    </div>
  );
};
export default MyPosts;

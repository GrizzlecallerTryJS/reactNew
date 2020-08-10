import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostAC, updateNewPostTextAC } from '../../../redux/state';

const MyPosts = (props) => {
  const postData = props.postData;

  const PostMap = postData.map((post) => {
    return (
      <Post
        id={post.id}
        message={post.message}
        liked={post.liked}
        likeCount={post.likeCount}
        dispatch={props.dispatch}
      />
    );
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostAC());
  };

  let updateNewPostText = () => {
    let text = newPostElement.current.value;
    /* let action = {
      type: 'UPDATE-NEW-POST-TEXT',
      newPostText: text,
    }; */
    props.dispatch(updateNewPostTextAC(text));
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
          <textarea onChange={updateNewPostText} ref={newPostElement} value={props.newPostText} />
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

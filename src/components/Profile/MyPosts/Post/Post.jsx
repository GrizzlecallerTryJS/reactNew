import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  const likeButtonCounter = () => {
    return props.likeButtonCounter(props.id);
  };

  const likeButtonState = () => {
    if (!props.liked) {
      return (
        <span>
          <button onClick={likeButtonCounter}>push to like</button>
        </span>
      );
    } else {
      return (
        <span>
          <button onClick={likeButtonCounter}>push to unLike</button>
        </span>
      );
    }
  };

  return (
    <div className={styles.post_global}>
      <div className={styles.post_avatar_image}>
        <img
          src='https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000002/1553528383000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000'
          alt='post avatar'
        />
        <div className={styles.post_sugar}>
          <div>
            {props.message} (Likes {props.likeCount})
          </div>
          {likeButtonState()}
          <p />
        </div>
      </div>
    </div>
  );
};

export default Post;

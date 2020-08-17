import React from 'react';
import styles from './UserItem.module.css';

const UserItem = (props) => {
  let followButton = () => {
    return props.followButton(props.id);
  };

  let followState = () => {
    if (!props.followed) {
      return (
        <div>
          <button onClick={followButton}>follow</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={followButton}>unFollow</button>
        </div>
      );
    }
  };

  let defaultStatus = () => {
    return <div>Lorem ipsum dolor sit amet consectetur.</div>;
  };

  let hasImageSmall = () => {
    return props.avatar === null ? props.defaultImage : props.avatar;
  };

  let haStatus = () => {
    return props.status === null ? defaultStatus() : props.status;
  };

  return (
    <div className={styles.userItem_global}>
      <div className={styles.userItem_avatar_image}>
        <img src={hasImageSmall()} alt='{avatarSmall}' />
      </div>
      <div className={styles.userItem_name_area}>{props.name}</div>
      <div className={styles.userItem_status_area}>{haStatus()}</div>
      <div className={styles.userItem_followButton_area}>{followState()}</div>
    </div>
  );
};

export default UserItem;

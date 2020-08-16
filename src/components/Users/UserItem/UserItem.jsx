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

  return (
    <div className={styles.userItem_global}>
      <div className={styles.userItem_avatar_image}>
        <img src={props.avatar} alt='{avatar}' />
      </div>
      <div className={styles.userItem_name_area}>{props.fullName}</div>
      <div className={styles.userItem_status_area}>{props.status}</div>
      <div className={styles.userItem_followButton_area}>{followState()}</div>
    </div>
  );
};

export default UserItem;

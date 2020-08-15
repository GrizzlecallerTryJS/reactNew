import React from 'react';
import styles from './UserItems.module.css';

const UserItems = (props) => {
  const followButton = () => {
    return props.followButton(props.id);
  };

  const followButtonState = () => {
    if (!props.followed) {
      return (
        <span>
          <button onClick={followButton}>Follow</button>
        </span>
      );
    } else {
      return (
        <span>
          <button onClick={followButton}>unFollow</button>
        </span>
      );
    }
  };

  return (
    <div className={styles.users_global}>
      <div>
        <div>Name : {props.fullname}</div>
        <div>status : {props.status}</div>
        <div>{followButtonState()}</div>
        <p />
      </div>
    </div>
  );
};

export default UserItems;

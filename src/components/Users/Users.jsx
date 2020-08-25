import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';

const Users = (props) => {
  let user = props.users.map((user) => {
    return (
      <UserItem
        id={user.id}
        avatar={user.photos.small}
        followed={user.followed}
        name={user.name}
        status={user.status}
        followButton={props.followButton}
        defaultImage={props.defaultImage}
        followingProgress={props.followingProgress}
        followingProgressState={props.followingProgressState}
        key={user.id}
      />
    );
  });

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages[i - 1] = i;
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p ? styles.selectedPage : ''}
              onClick={(e) => {
                props.onPageChanged(p);
              }}>
              {p}
            </span>
          );
        })}
      </div>
      <div className={styles.users_global}>
        <div>{user}</div>
      </div>
    </div>
  );
};

export default Users;

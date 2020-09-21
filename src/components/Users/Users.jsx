import React from 'react';
import Paginator from '../../assets/Paginator/Paginator';
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
        defaultImage={props.defaultImage}
        followingProgressState={props.followingProgressState}
        key={user.id}
        followUnfollow={props.followUnfollow}
      />
    );
  });

  return (
    <div>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
        requestedPage={props.requestedPage}
      />
      <div className={styles.users_global}>
        <div>{user}</div>
      </div>
    </div>
  );
};

export default Users;

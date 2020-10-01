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
        follow={props.follow}
        unFollow={props.unFollow}
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
      <Paginator
        pages={pages}
        pagesCount={pagesCount}
        itemsForPaginator={props.itemsForPaginator}
        requestedPage={props.requestedPage}
        onPageChanged={props.onPageChanged}
      />
      <div className={styles.users_global}>
        <div>{user}</div>
      </div>
    </div>
  );
};

export default Users;

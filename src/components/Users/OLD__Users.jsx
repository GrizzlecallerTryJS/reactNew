import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';
import * as axios from 'axios';
import defaultImage from './../../assets/defaultImage.jpg';

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      //const api = { 'API-KEY': '653ec9e5-ccbc-4acb-a463-5e7bb82f9446' };
      axios.get('https://social-network.samuraijs.com/api/1.0/users', { withCredentials: true }).then((response) => {
        props.setUsers(response.data.items);
      });
    }
  };

  let hasShowUsers = () => {
    if (props.users.length === 0) {
      return (
        <div>
          <button onClick={getUsers}>Get Users</button>
        </div>
      );
    } else {
      return <div />;
    }
  };

  const user = props.users.map((user) => {
    return (
      <UserItem
        id={user.id}
        avatar={user.photos.small}
        followed={user.followed}
        name={user.name}
        status={user.status}
        followButton={props.followButton}
        defaultImage={defaultImage}
      />
    );
  });
  return (
    <div>
      <div>{hasShowUsers()}</div>
      <div className={styles.users_global}>
        <div>{user}</div>
      </div>
    </div>
  );
};

export default Users;

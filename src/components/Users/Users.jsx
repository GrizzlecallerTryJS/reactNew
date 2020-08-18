import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';
import * as axios from 'axios';
import defaultImage from './../../assets/defaultImage.jpg';

class Users extends React.Component {
  // конструктор закоменчен, только потому что его не обязательно писать, т.к.
  // единственное его предназначение передавать пропсы в родительский класс

  /* constructor (props) {
    super(props);
  } */

  componentDidMount () {
    axios.get('https://social-network.samuraijs.com/api/1.0/users', { withCredentials: true }).then((response) => {
      this.props.setUsers(response.data.items);
    });
  }

  render () {
    let user = this.props.users.map((user) => {
      return (
        <UserItem
          id={user.id}
          avatar={user.photos.small}
          followed={user.followed}
          name={user.name}
          status={user.status}
          followButton={this.props.followButton}
          defaultImage={defaultImage}
        />
      );
    });
    return (
      <div>
        <div className={styles.users_global}>
          <div>{user}</div>
        </div>
      </div>
    );
  }
}

export default Users;

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
    let page = this.props.currentPage;
    let count = this.props.pageSize;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`, { withCredentials: true })
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    let page = pageNumber;
    let count = this.props.pageSize;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`, { withCredentials: true })
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render () {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages[i - 1] = i;
    }

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
        <div>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p ? styles.selectedPage : ''}
                onClick={(e) => {
                  this.onPageChanged(p);
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
  }
}

export default Users;

import React from 'react';
import { connect } from 'react-redux';
import { followButtonAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/Users-Reducer';
import * as axios from 'axios';
import defaultImage from './../../assets/defaultImage.jpg';
import Users from './Users';

class UsersAPIComponent extends React.Component {
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
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        defaultImage={defaultImage}
        followButton={this.props.followButton}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.forUsers.users,
    pageSize: state.forUsers.pageSize,
    totalUsersCount: state.forUsers.totalUsersCount,
    currentPage: state.forUsers.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    followButton: (id) => {
      dispatch(followButtonAC(id));
    },
    setUsers: (newUsers) => {
      dispatch(setUsersAC(newUsers));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};

//const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

//export default UsersContainer;

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

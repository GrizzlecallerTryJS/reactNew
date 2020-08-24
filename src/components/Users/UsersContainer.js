import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { followButton, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching } from '../../redux/Users-Reducer';
import * as axios from 'axios';
import defaultImage from './../../assets/defaultImage.jpg';
import Users from './Users';
import Preloader from '../../assets/loaders/Preloader/Preloader';

class UsersAPIComponent extends React.Component {
  // конструктор закоменчен, только потому что его не обязательно писать, т.к.
  // единственное его предназначение передавать пропсы в родительский класс

  /* constructor (props) {
    super(props);
  } */

  componentDidMount () {
    this.props.setIsFetching(true);
    let page = this.props.currentPage;
    let count = this.props.pageSize;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`, {
        withCredentials: true,
        headers: {
          'API-KEY': 'a57a0a64-780f-4014-88c0-5c80c079bab6',
        },
      })
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    let page = pageNumber;
    let count = this.props.pageSize;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`, {
        withCredentials: true,
        headers: {
          'API-KEY': 'a57a0a64-780f-4014-88c0-5c80c079bab6',
        },
      })
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render () {
    const UsersCalller = () => {
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
    };
    return <Fragment>{this.props.isFetching ? <Preloader /> : <UsersCalller />}</Fragment>;
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.forUsers.users,
    pageSize: state.forUsers.pageSize,
    totalUsersCount: state.forUsers.totalUsersCount,
    currentPage: state.forUsers.currentPage,
    isFetching: state.forUsers.isFetching,
  };
};

/* let mapDispatchToProps = (dispatch) => {
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
    setIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching));
    },
  };
}; */

/* let mapDispatchToProps = {
  followButton: followButtonAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUsersCount: setTotalUsersCountAC,
  setIsFetching: setIsFetchingAC,
}; */

let mapDispatchToProps = {
  followButton,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
};

//const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

//export default UsersContainer;

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

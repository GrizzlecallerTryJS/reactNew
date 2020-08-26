import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { followingProgress, getUsers, getUsersPage, follow, unFollow } from '../../redux/Users-Reducer';
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
    let currentPage = this.props.currentPage;
    let pageSize = this.props.pageSize;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    let pageSize = this.props.pageSize;
    this.props.getUsersPage(pageNumber, pageSize);
  };

  render () {
    const UsersCalller = () => {
      return (
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          defaultImage={defaultImage}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          followingProgressState={this.props.followingProgressState}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
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
    followingProgressState: state.forUsers.followingProgressState,
  };
};

/* let mapDispatchToProps = (dispatch) => {
  return {
    followButton: (id) => {
      dispatch(followButtonAC(id));
    },
  };
}; */

/* let mapDispatchToProps = {
  followButton: followButtonAC,
}; */

let mapDispatchToProps = {
  followingProgress,
  getUsers,
  getUsersPage,
  follow,
  unFollow,
};

//const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

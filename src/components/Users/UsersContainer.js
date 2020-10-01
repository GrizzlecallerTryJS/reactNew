import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  followingProgress,
  requestUsers,
  requestUsersPage,
  followUnfollow,
  getPageSize,
  getUsersOnPage,
  getTotalUsersCount,
  getCurrentPage,
  getFetching,
  getFollowingProgressState,
  getItemsForPaginator,
  getComponentReadyToMountState,
  readyToMount,
} from '../../redux/Users-Reducer';
import defaultImage from './../../assets/defaultImage.jpg';
import Users from './Users';
import Preloader from '../../assets/loaders/Preloader/Preloader';
import { compose } from 'redux';
import { isThrowStatement } from 'typescript';

class UsersAPIComponent extends React.Component {
  // конструктор закоменчен, только потому что его не обязательно писать, т.к.
  // единственное его предназначение передавать пропсы в родительский класс

  /* constructor (props) {
    super(props);
  } */

  componentDidMount () {
    let requestedPage = this.props.requestedPage;
    let pageSize = this.props.pageSize;
    this.props.readyToMount(requestedPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    let pageSize = this.props.pageSize;
    this.props.requestUsersPage(pageNumber, pageSize);
  };

  render () {
<<<<<<< HEAD
    /* if (!this.props.componentReadyToMount) {
      return <Preloader />;
    } */

    const UsersCalller = () => {
=======
    const UsersCaller = () => {
>>>>>>> 0a8d4f77e18ee2bde1720b0e2a4abbe1980c5006
      return (
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          defaultImage={defaultImage}
          requestedPage={this.props.requestedPage}
          onPageChanged={this.onPageChanged}
          followingProgressState={this.props.followingProgressState}
<<<<<<< HEAD
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          itemsForPaginator={this.props.itemsForPaginator}
=======
          followUnfollow={this.props.followUnfollow}
>>>>>>> 0a8d4f77e18ee2bde1720b0e2a4abbe1980c5006
        />
      );
    };
    return <Fragment>{this.props.isFetching ? <Preloader /> : <UsersCaller />}</Fragment>;
  }
}

let mapStateToProps = (state) => {
  return {
    users                  : getUsersOnPage(state),
    pageSize               : getPageSize(state),
    totalUsersCount        : getTotalUsersCount(state),
    requestedPage          : getCurrentPage(state),
    isFetching             : getFetching(state),
    followingProgressState : getFollowingProgressState(state),
    itemsForPaginator      : getItemsForPaginator(state),
    componentReadyToMount  : getComponentReadyToMountState(state),
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
  requestUsers,
  requestUsersPage,
<<<<<<< HEAD
  follow,
  unFollow,
  readyToMount,
=======
  followUnfollow,
>>>>>>> 0a8d4f77e18ee2bde1720b0e2a4abbe1980c5006
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(UsersAPIComponent);

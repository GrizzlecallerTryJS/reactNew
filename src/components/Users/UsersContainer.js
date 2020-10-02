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
    const UsersCaller = () => {
      return (
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          defaultImage={defaultImage}
          requestedPage={this.props.requestedPage}
          onPageChanged={this.onPageChanged}
          followingProgressState={this.props.followingProgressState}
          followUnfollow={this.props.followUnfollow}
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
  followUnfollow,
  readyToMount,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(UsersAPIComponent);

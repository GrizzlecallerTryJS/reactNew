import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  followingProgress,
  requestUsers,
  requestUsersPage,
  follow,
  unFollow,
  getPageSize,
  getUsersOnPage,
  getTotalUsersCount,
  getCurrentPage,
  getFetching,
  getFollowingProgressState,
} from '../../redux/Users-Reducer';
import defaultImage from './../../assets/defaultImage.jpg';
import Users from './Users';
import Preloader from '../../assets/loaders/Preloader/Preloader';
import { compose } from 'redux';

class UsersAPIComponent extends React.Component {
  // конструктор закоменчен, только потому что его не обязательно писать, т.к.
  // единственное его предназначение передавать пропсы в родительский класс

  /* constructor (props) {
    super(props);
  } */

  componentDidMount () {
    let requestedPage = this.props.requestedPage;
    let pageSize = this.props.pageSize;
    this.props.requestUsers(requestedPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    let pageSize = this.props.pageSize;
    this.props.requestUsersPage(pageNumber, pageSize);
  };

  render () {
    const UsersCalller = () => {
      return (
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          defaultImage={defaultImage}
          requestedPage={this.props.requestedPage}
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
    users: getUsersOnPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    requestedPage: getCurrentPage(state),
    isFetching: getFetching(state),
    followingProgressState: getFollowingProgressState(state),
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
  follow,
  unFollow,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(UsersAPIComponent);

//export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

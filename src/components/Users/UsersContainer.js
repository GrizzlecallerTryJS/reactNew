import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { followButton, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching } from '../../redux/Users-Reducer';
import defaultImage from './../../assets/defaultImage.jpg';
import Users from './Users';
import Preloader from '../../assets/loaders/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersAPIComponent extends React.Component {
  // конструктор закоменчен, только потому что его не обязательно писать, т.к.
  // единственное его предназначение передавать пропсы в родительский класс

  /* constructor (props) {
    super(props);
  } */

  componentDidMount () {
    this.props.setIsFetching(true);
    let page = this.props.currentPage;
    let pageSize = this.props.pageSize;
    usersAPI.getUsers(page, pageSize).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    let page = pageNumber;
    let pageSize = this.props.pageSize;
    usersAPI.getUsers(page, pageSize).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
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
  };
}; */

/* let mapDispatchToProps = {
  followButton: followButtonAC,
}; */

let mapDispatchToProps = {
  followButton,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
};

//const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

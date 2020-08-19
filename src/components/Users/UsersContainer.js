import { connect } from 'react-redux';
import { followButtonAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/Users-Reducer';
import Users from './Users';

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

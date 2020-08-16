import { connect } from 'react-redux';
import Users from './Users';
import { followButtonAC, setUsersAC } from '../../redux/Users-Reducer';

let mapStateToProps = (state) => {
  return {
    users: state.forUsers.users,
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
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

import { connect } from 'react-redux';
import { followButtonAC, setUsersAC } from '../../redux/Users-Reducer';
import Users from './Users';

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

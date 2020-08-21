import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { setCommonUserProfileAC } from '../../redux/Profile-Reducer';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {
  componentDidMount () {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`, { withCredentials: true }).then((response) => {
      this.props.setCommonUserProfile(response.data);
    });
  }

  render () {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    userData: state.forProfile,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setCommonUserProfile: (userData) => {
      dispatch(setCommonUserProfileAC(userData));
    },
  };
};

//export default ProfileContainer;

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

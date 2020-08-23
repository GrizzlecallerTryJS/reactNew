import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { setCommonUserProfile } from '../../redux/Profile-Reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount () {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, { withCredentials: true })
      .then((response) => {
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

/* let mapDispatchToProps = (dispatch) => {
  return {
    setCommonUserProfile: (userData) => {
      dispatch(setCommonUserProfileAC(userData));
    },
  };
}; */

let mapDispatchToProps = {
  setCommonUserProfile,
};

let withUrlDataContainerComponent = withRouter(ProfileContainer);

//export default ProfileContainer;

export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);

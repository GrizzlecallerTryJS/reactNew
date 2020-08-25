import React, { Fragment } from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { setCommonUserProfile, setIsFetching } from '../../redux/Profile-Reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from '../../assets/loaders/Preloader/Preloader';
import defaultImage from './../../assets/defaultImage.jpg';

class ProfileContainer extends React.Component {
  componentDidMount () {
    this.props.setIsFetching(true);
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, { withCredentials: true })
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setCommonUserProfile(response.data);
      });
  }

  render () {
    let ProfileCaller = () => {
      return <Profile {...this.props} defaultImage={defaultImage} />;
    };
    return (
      <div>
        <Fragment>{this.props.isFetching ? <Preloader /> : <ProfileCaller />}</Fragment>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    userData: state.forProfile,
    isFetching: state.forProfile.isFetching,
    postData: state.forPosts.postData,
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
  setIsFetching,
};

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);

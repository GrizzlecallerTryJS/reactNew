import React, { Fragment } from 'react';
import Profile from './Profile';
import {
  setCommonUserProfile,
  setIsFetching,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from '../../redux/Profile-Reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from '../../assets/loaders/Preloader/Preloader';
import defaultImage from './../../assets/defaultImage.jpg';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount () {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  defaultStatus = 'defaultStatus';

  render () {
    let ProfileCaller = () => {
      return <Profile {...this.props} defaultImage={defaultImage} defaultStatus={this.defaultStatus} />;
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
    status: state.forProfile.status,
    isFetching: state.forProfile.isFetching,
    postData: state.forPosts.postData,
    authorizedUserId: state.forAuth.id,
    isAuth: state.forAuth.isAuth,
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
  getUserProfile,
  getUserStatus,
  updateUserStatus,
};

let profileContainer = compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(ProfileContainer);

export default profileContainer;

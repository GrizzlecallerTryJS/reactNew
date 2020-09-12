import React, { Fragment } from 'react';
import Profile from './Profile';
import {
  setCommonUserProfile,
  setIsFetching,
  getAllUserData,
  updateUserStatus,
  getUserData,
  getIsFetching,
  getAllUserDataState,
  getStatus,
} from '../../redux/Profile-Reducer';
import { getPostData } from '../../redux/Post-Reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from '../../assets/loaders/Preloader/Preloader';
import defaultImage from './../../assets/defaultImage.jpg';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getAuth, getAuthId } from '../../redux/Auth-Reducer';

class ProfileContainer extends React.Component {
  componentDidMount () {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getAllUserData(userId);
  }

  defaultStatus = 'defaultStatus';

  render () {
    if (!this.props.allUserDataState) {
      return <Preloader />;
    }

    let ProfileCaller = () => {
      debugger;
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
    userData         : getUserData(state),
    isFetching       : getIsFetching(state),
    postData         : getPostData(state),
    authorizedUserId : getAuthId(state),
    isAuth           : getAuth(state),
    allUserDataState : getAllUserDataState(state),
    status           : getStatus(state),
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
  getAllUserData,
  updateUserStatus,
  getStatus,
};

let profileContainer = compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(ProfileContainer);

export default profileContainer;

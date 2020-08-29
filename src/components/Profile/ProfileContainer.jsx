import React, { Fragment } from 'react';
import Profile from './Profile';
import { setCommonUserProfile, setIsFetching, getUserProfile } from '../../redux/Profile-Reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from '../../assets/loaders/Preloader/Preloader';
import defaultImage from './../../assets/defaultImage.jpg';
import withAuthRedirect from '../../hoc/WithAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount () {
    let userId = this.props.match.params.userId;
    this.props.getUserProfile(userId);
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
};

let withUrlDataContainerComponent = withRouter(ProfileContainer);

const profileContainerWithAIthHOC = withAuthRedirect(withUrlDataContainerComponent);

export default connect(mapStateToProps, mapDispatchToProps)(profileContainerWithAIthHOC);

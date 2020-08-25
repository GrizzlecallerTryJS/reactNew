import React, { Fragment } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, setIsFetching, setAuthUserImage } from '../../redux/Auth-Reducer';
import Preloader from '../../assets/loaders/Preloader/Preloader';
import defaultImage from '../../assets/defaultImage.jpg';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount () {
    this.props.setIsFetching(true);
    usersAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        this.props.setIsFetching(false);
        let { id, login, email } = data.data;
        this.props.setAuthUserData(id, login, email);
      }
      usersAPI.getUserProfile(data.data.id).then((data) => {
        !data.photos.small ? this.props.setAuthUserImage(defaultImage) : this.props.setAuthUserImage(data.photos.small);
      });
    });
  }

  render () {
    const HeaderCaller = () => {
      return <Header {...this.props} />;
    };
    return <Fragment>{this.props.isFetching ? <Preloader /> : <HeaderCaller />}</Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.forAuth.isAuth,
    login: state.forAuth.login,
    authUserImage: state.forAuth.authUserImage,
  };
};

const mapDispatchToProps = {
  setAuthUserData,
  setIsFetching,
  setAuthUserImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

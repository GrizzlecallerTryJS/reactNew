import React, { Fragment } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, setIsFetching, setAuthUserImage, authLogoutUser } from '../../redux/Auth-Reducer';
import Preloader from '../../assets/loaders/Preloader/Preloader';
import { getHeader } from '../../redux/Header-Reducer';
import { compose } from 'redux';
import { profileAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount () {
    this.props.getHeader();
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
    userId: state.forAuth.id,
    authUserImage: state.forAuth.authUserImage,
  };
};

const mapDispatchToProps = {
  setAuthUserData,
  setIsFetching,
  setAuthUserImage,
  getHeader,
  authLogoutUser,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(HeaderContainer);

//export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

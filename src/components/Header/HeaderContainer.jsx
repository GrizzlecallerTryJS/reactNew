import React, { Fragment } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, setIsFetching } from '../../redux/Auth-Reducer';
import * as axios from 'axios';
import Preloader from '../../assets/loaders/Preloader/Preloader';
import defaultImage from '../../assets/defaultImage.jpg';

class HeaderContainer extends React.Component {
  componentDidMount () {
    this.props.setIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.setIsFetching(false);
          let { id, login, email } = response.data.data;
          this.props.setAuthUserData(id, login, email);
        }
        axios
          .get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`, {
            withCredentials: true,
          })
          .then((response) => {
            debugger;
            if (response.data.photos.small) {
              let image = response.data.photos.small;
              this.props.setAuthUserData(image);
            } else {
              this.props.setAuthUserData(defaultImage);
            }
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
    image: state.forAuth.image,
  };
};

const mapDispatchToProps = {
  setAuthUserData,
  setIsFetching,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

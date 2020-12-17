import React from 'react';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/App-Reducer';
import { compose } from 'redux';
import Preloader from './assets/loaders/Preloader/Preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  componentDidMount () {
    this.props.initializeApp();
  }
  render () {
    const DialogsCaller = () => {
      return <DialogsContainer />;
    };

    const ProfileCaller = () => {
      return <ProfileContainer />;
    };

    const NavbarCaller = () => {
      return <NavbarContainer />;
    };

    const HeaderCaller = () => {
      return <HeaderContainer />;
    };

    const UsersCaller = () => {
      return <UsersContainer />;
    };

    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className='app_wrapper'>
        <div className='app_wrapper_header'>
          <HeaderCaller />
        </div>
        <div className='app_wrapper_navbar'>
          <NavbarCaller />
        </div>
        <div className='app_wrapper_content'>
          <Route path='/profile/:userId?' component={ProfileCaller} />
          <div className='app_wrapper_dialogs'>
            <Route exact path='/messages' component={DialogsCaller} />
          </div>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/friends' component={Friends} />
          <Route path='/users' component={UsersCaller} />
          <Route path='/login' component={Login} />
        </div>
      </div>
    );
  }
}

/* const mdtp = {
  getAuthUserData,
}; */

//export default connect(null, { getAuthUserData })(App);

const mapStateToProps = (state) => {
  return {
    initialized : state.forApp.initialized,
  };
};

//export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;

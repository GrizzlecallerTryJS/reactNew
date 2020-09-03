import React from 'react';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import { Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
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
};

export default App;

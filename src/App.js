import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

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
    return <Header />;
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
        <Route path='/profile/:userId?' render={ProfileCaller} />
        <div className='app_wrapper_dialogs'>
          <Route exact path='/messages' render={DialogsCaller} />
        </div>
        <Route path='/news' render={News} />
        <Route path='/music' render={Music} />
        <Route path='/settings' render={Settings} />
        <Route path='/friends' render={Friends} />
        <Route path='/users' render={UsersCaller} />
      </div>
    </div>
  );
};

export default App;

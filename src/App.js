import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';

const App = (props) => {
  const DialogsCaller = () => {
    return <Dialogs state={props.state.forDialogs} />;
  };

  const ProfileCaller = () => {
    return (
      <Profile
        forPosts={props.state.forPosts}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        likeButtonCounter={props.likeButtonCounter}
      />
    );
  };

  const NavbarCaller = () => {
    return <Navbar state={props.state.forNavbar} />;
  };

  const HeaderCaller = () => {
    return <Header />;
  };

  /* let items = props.state.forApp.appData.map((i) => {
    return (
      <div>
        <AppLoadItems path={i.path} component={i.component} route={i.route} />
      </div>
    );
  });
  return <div className='app_wrapper'>{items}</div>; */

  return (
    <div className='app_wrapper'>
      <div className='app_wrapper_header'>
        <HeaderCaller />
      </div>
      <div className='app_wrapper_navbar'>
        <NavbarCaller />
      </div>
      <div className='app_wrapper_content'>
        <Route path='/profile' render={ProfileCaller} />
        <div className='app_wrapper_dialogs'>
          <Route exact path='/messages' render={DialogsCaller} />
        </div>
        <Route path='/news' render={News} />
        <Route path='/music' render={Music} />
        <Route path='/settings' render={Settings} />
        <Route path='/friends' render={Friends} />
      </div>
    </div>
  );
};

export default App;

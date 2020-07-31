import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className='app_wrapper'>
      <div className='app_wrapper_header'>
        <Header />
      </div>
      <div className='app_wrapper_navbar'>
        <Navbar />
      </div>
      <div className='app_wrapper_content'>
        <Profile />
      </div>
      <div className='app_wrapper_dialogs'>
        <Dialogs />
      </div>
    </div>
  );
};

export default App;

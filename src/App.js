import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <div className='app_wrapper_header'>
          <Header />
        </div>
        <div className='app_wrapper_navbar'>
          <Navbar />
        </div>
        <div className='app_wrapper_content'>
          <Route path='/profile' component={Profile} />
          <div className='app_wrapper_dialogs'>
            {/* так сделано что бы в итоге не путать адрес и компоненту */}
            <Route exact path='/messages' component={Dialogs} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

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

let dialogsData = [
  { id: 1, name: 'Aaron' },
  { id: 2, name: 'Bernard' },
  { id: 3, name: 'Christopher' },
  { id: 4, name: 'Dylan' },
];

let messagesData = [
  { id: 1, text: 'Sint duis nisi pariatur duis irure quis labore ut eiusmod in quis.' },
  { id: 2, text: 'Do est occaecat elit elit in voluptate exercitation quis exercitation magna ea ullamco.' },
  { id: 3, text: 'Laborum dolor anim Lorem ullamco veniam ad ea.' },
  { id: 4, text: 'Ad elit ea id reprehenderit reprehenderit nisi culpa esse eiusmod ut.' },
  { id: 5, text: 'Quis laboris irure ullamco dolore nostrud.' },
  { id: 6, text: 'Eu dolor nulla esse fugiat ea non est consequat ad exercitation.' },
  { id: 7, text: 'Est laboris sit elit magna veniam nostrud mollit duis minim.' },
];

let postData = [
  { id: 1, message: 'BEEP', likeCount: 15 },
  { id: 2, message: 'BOOP', likeCount: 20 },
  { id: 3, message: 'BOOP', likeCount: 20 },
  { id: 4, message: 'I', likeCount: 20 },
  { id: 5, message: 'AM', likeCount: 20 },
  { id: 6, message: 'A', likeCount: 20 },
  { id: 7, message: 'ROBOT', likeCount: 20 },
];

const App = () => {
  const dialogsCaller = () => {
    return <Dialogs dialogsData={dialogsData} messagesData={messagesData} />;
  };

  const profileCaller = () => {
    return <Profile postData={postData} />;
  };

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
          <Route path='/profile' component={profileCaller} />
          <div className='app_wrapper_dialogs'>
            {/* так сделано что бы в итоге не путать адрес и компоненту */}
            <Route exact path='/messages' component={dialogsCaller} />
          </div>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

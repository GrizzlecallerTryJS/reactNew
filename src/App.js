import React from 'react';

import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img
          src='https://www.freeflashlogos.com/wp-content/uploads/2019/05/logomaker-landing-page.jpg'
          alt='site logo'
        />
      </header>
      <nav className='nav'>
        <div>
          <p />
        </div>
        <div>Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Music</div>
        <div>
          <p />
        </div>
        <div>Settings</div>
      </nav>
      <div className='content'>
        <div>
          <img
            src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
            alt='test'
          />
        </div>
        <div>
          ava + description
          <div className='avatar'>
            <img src='https://imgur.com/I80W1Q0.png' alt='avatar' />
          </div>
        </div>
        <div>
          <div>Main Content</div>
          <div>
            <div>My posts</div>
            <div>New Post</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

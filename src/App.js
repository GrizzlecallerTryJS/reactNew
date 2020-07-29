import React from 'react';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Techno />
    </div>
  );
};

const Header = () => {
  return (
    <div className='App'>
      <p>Home</p>
      <p>News</p>
      <p>Messages</p>
    </div>
  );
};

const Techno = () => {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
};

export default App;

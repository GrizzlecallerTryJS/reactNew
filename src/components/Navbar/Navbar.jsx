import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <div>
        <p />
      </div>
      <div className={styles.item}>
        <a href='/profile'>Profile</a>
      </div>
      <div className={styles.item}>
        <a href='/messages'>Messages</a>
      </div>
      <div className={styles.item}>
        <a href='/news'>News</a>
      </div>
      <div className={styles.item}>
        <a href='/music'>Music</a>
      </div>
      <div>
        <p />
      </div>
      <div className={styles.item}>
        <a href='/settings'>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;

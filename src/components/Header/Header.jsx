import React from 'react';
import styles from './Header.module.css';
import { NavLink, Redirect } from 'react-router-dom';

const Header = (props) => {
  const login = () => {
    return (
      <div>
        <div>
          <NavLink to={`/profile/${props.userId}`}>{props.login}</NavLink> -{' '}
          <button onClick={props.authLogoutUser}>logout</button>
        </div>
      </div>
    );
  };
  let userAuth = () => {
    return props.isAuth ? login() : <NavLink to={'/login'}>Login</NavLink>;
  };

  return (
    <header className={styles.header}>
      <div className={styles.login_block}>
        <img
          src='https://www.freeflashlogos.com/wp-content/uploads/2019/05/logomaker-landing-page.jpg'
          alt='site logo'
        />
        <div>{userAuth()}</div>
        <div>
          <img src={props.authUserImage} alt='avatar' />
        </div>
      </div>
    </header>
  );
};

export default Header;

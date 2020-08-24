import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  let userAuth = () => {
    return props.isAuth ? <NavLink to={'/profile'}>{props.login}</NavLink> : <NavLink to={'/login'}>Login</NavLink>;
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

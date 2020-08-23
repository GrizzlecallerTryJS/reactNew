import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  /*   let userAuth = () => {
    if (!props.isAuth) {
      return <NavLink to={'/login'}>Login</NavLink>;
    }
    return <NavLink to={'/profile'}>{props.login}</NavLink>;
  }; */

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
        {userAuth()}
      </div>
    </header>
  );
};

export default Header;

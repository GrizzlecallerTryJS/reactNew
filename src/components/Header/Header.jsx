import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src='https://www.freeflashlogos.com/wp-content/uploads/2019/05/logomaker-landing-page.jpg' alt='site logo' />
    </header>
  );
};

export default Header;

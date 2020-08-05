import React from 'react';
import styles from './NavbarItems.module.css';
import { NavLink } from 'react-router-dom';

const NavbarItems = (props) => {
  return (
    <div>
      <div className={styles.item}>
        <NavLink to={props.path}>{props.article}</NavLink>
      </div>
    </div>
  );
};

export default NavbarItems;

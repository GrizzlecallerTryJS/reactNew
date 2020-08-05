import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import NavbarItems from './NavbarItems/NavbarItems';

const Navbar = (props) => {
  let navbarItems = props.state.navbarData.map((n) => {
    return <NavbarItems path={n.path} article={n.article} />;
  });

  return <div className={styles.item}>{navbarItems}</div>;
};

export default Navbar;

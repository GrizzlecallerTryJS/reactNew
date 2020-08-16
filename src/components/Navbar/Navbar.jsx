import React from 'react';
import styles from './Navbar.module.css';
import NavbarItems from './NavbarItems/NavbarItems';

const Navbar = (props) => {
  let navbarItems = props.navbarData.map((n) => {
    return <NavbarItems path={n.path} article={n.article} key={n.id} />;
  });

  return <div className={styles.item}>{navbarItems}</div>;
};

export default Navbar;

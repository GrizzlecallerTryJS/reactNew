import React from 'react';
import styles from './Navbar.module.css';
import NavbarItems from './NavbarItems/NavbarItems';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  /* debugger;
  let navbarItems = props.state.navbarData.map((n) => {
    return <NavbarItems path={n.path} article={n.article} />;
  });

  return <div className={styles.item}>{navbarItems}</div>; */

  return (
    <div>
      <div>
        <NavLink to='/profile'>profile</NavLink>
      </div>
      <div>
        <NavLink to='/messages'>messages</NavLink>
      </div>
      <div>
        <NavLink to='/news'>news</NavLink>
      </div>
      <div>
        <NavLink to='/music'>music</NavLink>
      </div>
      <div>
        <NavLink to='/settings'>settings</NavLink>
      </div>
      <div>
        <NavLink to='/friends'>friends</NavLink>
      </div>
    </div>
  );
};

export default Navbar;

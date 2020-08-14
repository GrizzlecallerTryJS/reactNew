import React from 'react';
import Navbar from './Navbar';

const NavbarContainer = (props) => {
  let stateForNavbar = props.store.getState().forNavbar.navbarData;

  return <Navbar navbarData={stateForNavbar} />;
};

export default NavbarContainer;

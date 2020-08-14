import React from 'react';
import Navbar from './Navbar';
import StoreContext from '../../StoreContext';

const NavbarContainer = (props) => {
  /* let stateForNavbar = props.store.getState().forNavbar.navbarData; */

  return (
    <StoreContext.Consumer>
      {(store) => {
        let stateForNavbar = store.getState().forNavbar.navbarData;
        return <Navbar navbarData={stateForNavbar} />;
      }}
    </StoreContext.Consumer>
  );
};

export default NavbarContainer;

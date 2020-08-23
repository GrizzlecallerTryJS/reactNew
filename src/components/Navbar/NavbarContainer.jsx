import Navbar from './Navbar';
import { connect } from 'react-redux';

/* const NavbarContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {(store) => {
        let stateForNavbar = store.getState().forNavbar.navbarData;
        return <Navbar navbarData={stateForNavbar} />;
      }}
    </StoreContext.Consumer>
  );
}; */

let mapStateToProps = (state) => {
  return {
    navbarData: state.forNavbar.navbarData,
  };
};

/* let mapDispatchToProps = () => {
  return {};
}; */

let mapDispatchToProps = {};

/* let NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer; */

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

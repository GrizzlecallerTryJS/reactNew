import Navbar from './Navbar';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getNavbarData } from '../../redux/NavBar-Reducer';

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
    navbarData : getNavbarData(state),
  };
};

/* let mapDispatchToProps = () => {
  return {};
}; */

let mapDispatchToProps = {};

//export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default compose(connect(mapStateToProps, mapDispatchToProps))(Navbar);

import React from 'react';
import styles from './Navbar.module.css';
import NavbarItems from './NavbarItems/NavbarItems';

class Navbar extends React.Component {
  // конструктор закоменчен, только потому что его не обязательно писать, т.к.
  // единственное его предназначение передавать пропсы в родительский класс
  /* constructor (props) {
    super(props);
  } */

  render () {
    let navbarItems = this.props.navbarData.map((n) => {
      return <NavbarItems path={n.path} article={n.article} key={n.id} />;
    });
    return <div className={styles.item}>{navbarItems}</div>;
  }
}

export default Navbar;

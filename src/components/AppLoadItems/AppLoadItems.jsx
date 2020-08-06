import React from 'react';
import styles from './AppLoadItems.module.css';
import { Route } from 'react-router-dom';

const AppLoadItems = (props) => {
  let AAA = () => {
    let PropsComponent = props.component;
    return <PropsComponent />;
  };

  return props.route ? <Route exact path={props.path} render={props.component} /> : AAA;
};

/* через пропсы принимает массив компонент, которые нужно отрисовать и передать в App.js */

/*  <Route path='/settings' component={Settings} /> */
/* <Route path='/profile' render={profileCaller} /> */

export default AppLoadItems;

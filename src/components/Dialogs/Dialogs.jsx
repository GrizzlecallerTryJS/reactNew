import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs_main}>
      <div className={styles.dialogs_items}>
        <div className={styles.dialog}>
          <NavLink to='/messages/Aaron'>Aaron</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to='/messages/Bernard'>Bernard</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to='/messages/Christopher'>Christopher</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to='/messages/Dylan'>Dylan</NavLink>
        </div>
      </div>
      <div className={styles.dialogs_messages}>
        <div className={styles.message}>Sint duis nisi pariatur duis irure quis labore ut eiusmod in quis.</div>
        <div className={styles.message}>
          Do est occaecat elit elit in voluptate exercitation quis exercitation magna ea ullamco.
        </div>
        <div className={styles.message}>Laborum dolor anim Lorem ullamco veniam ad ea.</div>
      </div>
    </div>
  );
};

export default Dialogs;

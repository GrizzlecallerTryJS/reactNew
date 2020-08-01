import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs_main}>
      <div className={styles.dialogs_items}>
        <div className={styles.dialog}>QQQ</div>
        <div className={styles.dialog}>WWW</div>
        <div className={styles.dialog}>EEE</div>
        <div className={styles.dialog}>RRR</div>
      </div>
      <div className={styles.dialogs_messages}>
        <div className={styles.message}>111</div>
        <div className={styles.message}>222</div>
        <div className={styles.message}>333</div>
      </div>
    </div>
  );
};

export default Dialogs;

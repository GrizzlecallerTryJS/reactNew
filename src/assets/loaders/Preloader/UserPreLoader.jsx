import React from 'react';
import styles from './Preloader.module.css';

const Preloader = () => {
  return (
    <div>
      <div className={styles.lds_hourglass} />
    </div>
  );
};

export default Preloader;

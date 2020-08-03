import React, { Fragment } from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <Fragment>
      <Fragment>
        <img
          src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
          alt='test'
        />
      </Fragment>
      <Fragment>
        <div className={styles.avatar}>
          <img src='https://imgur.com/I80W1Q0.png' alt='avatar' />
          <div>------------------</div>
          <div>DESCRIPTION</div>
          <div>------------------</div>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default ProfileInfo;

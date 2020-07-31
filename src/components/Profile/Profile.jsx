import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
          alt='test'
        />
      </div>
      <div>
        <div className={styles.avatar}>
          <img src='https://imgur.com/I80W1Q0.png' alt='avatar' />
          <div>------------------</div>
          <div>DESCRIPTION</div>
          <div>------------------</div>
        </div>
      </div>
      <div>
        <div>MAIN CONTENT BELOW</div>
        <div>------------------</div>
        <MyPosts />
      </div>
    </div>
  );
};
export default Profile;

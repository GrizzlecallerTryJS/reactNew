import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img
          src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
          alt='test'
        />
      </div>
      <div>
        ava + description
        <div className={styles.avatar}>
          <img src='https://imgur.com/I80W1Q0.png' alt='avatar' />
        </div>
      </div>
      <div>
        <div>Main Content</div>
        <div className={styles.posts}>
          <div>My posts</div>
          <div>New Post</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;

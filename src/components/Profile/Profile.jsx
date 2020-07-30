import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className='content'>
      <div>
        <img
          src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
          alt='test'
        />
      </div>
      <div>
        ava + description
        <div className='avatar'>
          <img src='https://imgur.com/I80W1Q0.png' alt='avatar' />
        </div>
      </div>
      <div>
        <div>Main Content</div>
        <div>
          <div>My posts</div>
          <div>New Post</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;

import React, { Fragment } from 'react';
//import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <Fragment>
      <ProfileInfo />
      <div>
        <div>MAIN CONTENT BELOW</div>
        <div>------------------</div>
      </div>
      <Fragment>
        <MyPosts />
      </Fragment>
    </Fragment>
  );
};
export default Profile;

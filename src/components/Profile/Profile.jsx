import React, { Fragment } from 'react';
//import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <Fragment>
      <ProfileInfo />
      <div>
        <div>MAIN CONTENT BELOW</div>
        <div>------------------</div>
      </div>
      <Fragment>
        <MyPosts postData={props.postData} />
      </Fragment>
    </Fragment>
  );
};
export default Profile;

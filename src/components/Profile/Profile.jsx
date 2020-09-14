import React, { Fragment } from 'react';
//import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  console.log(props);

  window.props = [];
  window.props.push(props);
  return (
    <Fragment>
      <ProfileInfo
        userData={props.userData}
        defaultImage={props.defaultImage}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        defaultStatus={props.defaultStatus}
      />
      <div>
        <div>MAIN CONTENT BELOW</div>
        <div>------------------</div>
      </div>
      <Fragment>
        <MyPostsContainer />
      </Fragment>
    </Fragment>
  );
};
export default Profile;

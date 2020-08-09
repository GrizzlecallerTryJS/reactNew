import React, { Fragment } from 'react';
//import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  debugger;
  return (
    <Fragment>
      <ProfileInfo />
      <div>
        <div>MAIN CONTENT BELOW</div>
        <div>------------------</div>
      </div>
      <Fragment>
        <MyPosts
          postData={props.forPosts.postData}
          newPostText={props.forPosts.newPostText}
          updateNewPostText={props.updateNewPostText}
          addPost={props.addPost}
          likeButtonCounter={props.likeButtonCounter}
        />
      </Fragment>
    </Fragment>
  );
};
export default Profile;

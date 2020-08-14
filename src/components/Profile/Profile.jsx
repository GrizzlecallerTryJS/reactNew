import React, { Fragment } from 'react';
//import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <Fragment>
      <ProfileInfo />
      <div>
        <div>MAIN CONTENT BELOW</div>
        <div>------------------</div>
      </div>
      <Fragment>
        <MyPostsContainer store={props.store} />
      </Fragment>
    </Fragment>
  );
};
export default Profile;

/* postData={props.forPosts.postData}
          newPostText={props.forPosts.newPostText}
          dispatch={props.dispatch} */

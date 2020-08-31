import React, { Fragment } from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../../assets/loaders/Preloader/Preloader';
import ProfileStatusComponent from './ProfileStatusComponent';

const ProfileInfo = (props) => {
  if (!props.userData) {
    return <Preloader />;
  }

  const hasPhotoSmall = () => {
    return props.userData.photos.small ? props.userData.photos.small : props.defaultImage;
  };

  const facebook = () => {
    if (!props.userData.contacts.facebook) {
      return <div />;
    }
    return <div>facebook: {props.userData.contacts.facebook}</div>;
  };
  const website = () => {
    if (!props.userData.contacts.website) {
      return <div />;
    }
    return <div>website: {props.userData.contacts.website}</div>;
  };
  const vk = () => {
    if (!props.userData.contacts.vk) {
      return <div />;
    }
    return <div>vk: {props.userData.contacts.vk}</div>;
  };
  const twitter = () => {
    if (!props.userData.contacts.twitter) {
      return <div />;
    }
    return <div>twitter: {props.userData.contacts.twitter}</div>;
  };
  const instagram = () => {
    if (!props.userData.contacts.instagram) {
      return <div />;
    }
    return <div>instagram: {props.userData.contacts.instagram}</div>;
  };
  const youtube = () => {
    if (!props.userData.contacts.youtube) {
      return <div />;
    }
    return <div>youtube: {props.userData.contacts.youtube}</div>;
  };
  const github = () => {
    if (!props.userData.contacts.github) {
      return <div />;
    }
    return <div>github: {props.userData.contacts.github}</div>;
  };
  const mainLink = () => {
    if (!props.userData.contacts.mainLink) {
      return <div />;
    }
    return <div>mainLink: {props.userData.contacts.mainLink}</div>;
  };

  let profileStatus = () => {
    return <ProfileStatusComponent status={props.userData.aboutMe} />;
  };

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
          <img src={hasPhotoSmall()} alt='avatar' />
        </div>
        <div>{props.userData.fullName}</div>
        <div>{profileStatus()}</div>
        <div>------------------</div>
        <div>Контакты</div>
        <div>{facebook()}</div>
        <div>{website()}</div>
        <div>{vk()}</div>
        <div>{twitter()}</div>
        <div>{instagram()}</div>
        <div>{youtube()}</div>
        <div>{github()}</div>
        <div>{mainLink()}</div>
      </Fragment>
    </Fragment>
  );
};

export default ProfileInfo;

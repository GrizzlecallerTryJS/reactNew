import React, { Fragment } from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../../assets/loaders/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.userData) {
    return <Preloader />;
  }
  const facebook = () => {
    return props.userData.contacts.facebook ? props.userData.contacts.facebook : '';
  };
  const website = () => {
    return props.userData.contacts.website ? props.userData.contacts.website : '';
  };
  const vk = () => {
    return props.userData.contacts.vk ? props.userData.contacts.vk : '';
  };
  const twitter = () => {
    return props.userData.contacts.twitter ? props.userData.contacts.twitter : '';
  };
  const instagram = () => {
    return props.userData.contacts.instagram ? props.userData.contacts.instagram : '';
  };
  const youtube = () => {
    return props.userData.contacts.youtube ? props.userData.contacts.youtube : '';
  };
  const github = () => {
    return props.userData.contacts.github ? props.userData.contacts.github : '';
  };
  const mainLink = () => {
    return props.userData.contacts.mainLink ? props.userData.contacts.mainLink : '';
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
          <img src={props.userData.photos.small} alt='avatar' />
        </div>
        <div>{props.userData.fullName}</div>
        <div>{props.userData.aboutMe}</div>
        <div>------------------</div>
        <div>Контакты</div>
        <div>facebook: {facebook()}</div>
        <div>website: {website()}</div>
        <div>vk: {vk()}</div>
        <div>twitter: {twitter()}</div>
        <div>instagram: {instagram()}</div>
        <div>youtube: {youtube()}</div>
        <div>github: {github()}</div>
        <div>mainLink: {mainLink()}</div>
      </Fragment>
    </Fragment>
  );
};

export default ProfileInfo;

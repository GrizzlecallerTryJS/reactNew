import React from 'react';
import styles from './MessageItem.module.css';

const MessageItem = (props) => {
  return <div className={styles.message}>{props.messageText}</div>;
};

export default MessageItem;

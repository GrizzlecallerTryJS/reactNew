import React from 'react';
import styles from '../../components/Users/Users.module.css';

const Paginator = (props) => {
  return (
    <div>
      {props.pages.map((p) => {
        return (
          <span
            className={props.requestedPage === p ? styles.selectedPage : ''}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
            key={p}>
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;

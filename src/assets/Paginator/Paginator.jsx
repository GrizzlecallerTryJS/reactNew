import React from 'react';
import styles from './Paginator.module.css';

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages[i - 1] = i;
  }

  return (
    <div>
      {pages.map((p) => {
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

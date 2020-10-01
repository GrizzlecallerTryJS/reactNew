import React, { useEffect, useState } from 'react';
import styles from '../../components/Users/Users.module.css';

const Paginator = (props) => {
  console.log('Посмотри 87 лецию!');
  const [
    currentCount,
    setCurrentCount,
  ] = useState(0);

  let rowsForMassive = Math.ceil(props.pagesCount / props.itemsForPaginator);

  let tenPagesMassive = [];

  let create2DArray = (rows) => {
    let tmp = 1;

    for (let i = 0; i < rows; i++) {
      let tmpMassive = [];
      for (let j = 0; j < 10; j++) {
        if (tmp <= props.pagesCount) {
          tmpMassive[j] = tmp;
          tmp++;
        }
        tenPagesMassive[i] = tmpMassive;
      }
    }
    return tenPagesMassive;
  };

  let currentPaginatorMassive = create2DArray(rowsForMassive);

  let left = () => {
    currentCount > 0 ? setCurrentCount(currentCount - 1) : setCurrentCount(0);
  };

  let right = () => {
    currentCount < tenPagesMassive.length - 1
      ? setCurrentCount(currentCount + 1)
      : setCurrentCount(tenPagesMassive.length - 1);
  };

  return (
    <div>
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

      <div>
        <button onClick={left}>left</button>
        {console.log(currentPaginatorMassive[currentCount])}
        <button onClick={right}>right</button>
      </div>
    </div>
  );
};

export default Paginator;

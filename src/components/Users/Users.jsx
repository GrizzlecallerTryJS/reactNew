import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';

const Users = (props) => {
  debugger;
  if (props.users.length < 1) {
    props.setUsers([
      {
        id: 1,
        avatar: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
        followed: false,
        fullName: 'Carl',
        status: 'Adipisicing pariatur .',
        location: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: 2,
        avatar: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
        followed: true,
        fullName: 'Donald',
        status: 'Laboris sunt adipisicing.',
        location: { city: 'Kazan', country: 'Russia' },
      },
      {
        id: 3,
        avatar: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
        followed: false,
        fullName: 'Edward',
        status: 'Duis nostrud nulla.',
        location: { city: 'Minsk', country: 'Belarus' },
      },
      {
        id: 4,
        avatar: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
        followed: true,
        fullName: 'Graham',
        status: 'Do dolore velit fugiat.',
        location: { city: 'Los-Angeles', country: 'US' },
      },
      {
        id: 5,
        avatar: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
        followed: false,
        fullName: 'Hunter',
        status: 'Sunt voluptate officia.',
        location: { city: 'Chikago', country: 'US' },
      },
      {
        id: 6,
        avatar: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
        followed: true,
        fullName: 'James',
        status: 'Deserunt labore veniam.',
        location: { city: 'Detroit', country: 'US' },
      },
    ]);
  }

  const user = props.users.map((user) => {
    debugger;
    return (
      <UserItem
        id={user.id}
        avatar={user.avatar}
        followed={user.followed}
        fullName={user.fullName}
        status={user.status}
        followButton={props.followButton}
      />
    );
  });
  return (
    <div className={styles.users_global}>
      <div>{user}</div>
    </div>
  );
};

export default Users;

import React from 'react';
import UserItems from './UserItems/UserItems';

const Users = (props) => {
  if (props.users.length < 1) {
    props.setUsers([
      {
        id: 1,
        avatar: '',
        followed: false,
        fullName: 'Carl',
        status: 'Adipisicing pariatur .',
        location: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: 2,
        avatar: '',
        followed: true,
        fullName: 'Donald',
        status: 'Laboris sunt adipisicing.',
        location: { city: 'Kazan', country: 'Russia' },
      },
      {
        id: 3,
        avatar: '',
        followed: false,
        fullName: 'Edward',
        status: 'Duis nostrud nulla.',
        location: { city: 'Minsk', country: 'Belarus' },
      },
      {
        id: 4,
        avatar: '',
        followed: true,
        fullName: 'Graham',
        status: 'Do dolore velit fugiat.',
        location: { city: 'Los-Angeles', country: 'US' },
      },
      {
        id: 5,
        avatar: '',
        followed: false,
        fullName: 'Hunter',
        status: 'Sunt voluptate officia.',
        location: { city: 'Chikago', country: 'US' },
      },
      {
        id: 6,
        avatar: '',
        followed: true,
        fullName: 'James',
        status: 'Deserunt labore veniam.',
        location: { city: 'Detroit', country: 'US' },
      },
    ]);
  }

  let showUsers = props.users.map((u) => {
    return (
      <UserItems
        id={u.id}
        fullname={u.fullName}
        status={u.status}
        followed={u.followed}
        followButton={props.followButton}
      />
    );
  });

  return <div>{showUsers}</div>;
};

export default Users;

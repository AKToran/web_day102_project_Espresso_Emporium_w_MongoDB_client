import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  return (
    <div>
      <h2 className='text-3xl'>all users: {initialUsers.length}</h2>
      <div>
        {
          users.map(user => <div key={user._id}> <p>{user.name}</p> </div>)
        }
      </div>
    </div>
  );
};

export default Users;
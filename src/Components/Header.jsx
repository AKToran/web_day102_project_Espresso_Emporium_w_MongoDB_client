import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <div className='text-center text-xl p-4'>
      <nav className='space-x-4'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/signin'}>SignIn</NavLink>
        <NavLink to={'/signup'}>SignUp</NavLink>
        <NavLink to={'/users'}>Users</NavLink>
      </nav>
    </div>
  );
};

export default Header;
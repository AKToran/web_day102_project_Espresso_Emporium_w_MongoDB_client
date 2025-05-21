import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <div className='text-center text-2xl p-4'>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
      </nav>
    </div>
  );
};

export default Header;
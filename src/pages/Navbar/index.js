import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/reset-prequest">Reset Password</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

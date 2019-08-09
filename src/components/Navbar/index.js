import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <>
    <NavLink to="/">Home</NavLink> <NavLink to="/login">Login</NavLink>{' '}
    <NavLink to="/signup">Signup</NavLink>{' '}
    <NavLink to="/reset">Reset Password</NavLink>{' '}
  </>
);

export default NavBar;

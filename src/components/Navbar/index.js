import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ history }) => (
  <div className="flex w-full justify-center text-lg font-bold tracking-wide mt-2">
    <NavLink
      exact
      to="/compose"
      className="w-1/4  bg-blue-300 text-center p-3 "
      activeClassName="text-white"
    >
      Compose Mail
    </NavLink>
    <NavLink
      exact
      to="/sent"
      className="w-1/4 bg-blue-300 text-center p-3 "
      activeClassName="text-white"
    >
      Sent Messages
    </NavLink>
    <button
      type="button"
      onClick={() => {
        localStorage.clear();
        window.location.reload();
      }}
      className="w-1/4 bg-blue-300 text-center p-3 focus:text-red-200 font-bold"
    >
      Logout
    </button>
  </div>
);

export default NavBar;

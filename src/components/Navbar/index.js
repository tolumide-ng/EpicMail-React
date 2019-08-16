import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ history }) => (
  <div className="flex w-10/12 justify-center text-lg font-bold tracking-wide mt-2 mx-auto">
    <NavLink
      exact
      to="/compose"
      className="w-1/3 bg-blue-700 text-center p-3 rounded rounded-r-none"
      activeClassName="text-white"
    >
      Compose Mail
    </NavLink>
    <NavLink
      exact
      to="/sent"
      className="w-1/3 bg-blue-700 text-center p-3 "
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
      className="w-1/3 bg-blue-700 text-center p-3 focus:text-red-200 font-bold rounded rounded-l-none"
    >
      Logout
    </button>
  </div>
);

export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ history }) => (
  <div className="flex w-full justify-center text-lg font-bold tracking-wide mt-2">
    <NavLink
      exact
      to="/"
      className="w-1/5 bg-blue-300 text-center p-3 rounded rounded-r-none"
      activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}
    >
      Home
    </NavLink>{' '}
    <NavLink
      exact
      to="/compose"
      className="w-1/5  bg-blue-300 text-center p-3 "
      activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}
    >
      Compose Mail
    </NavLink>
    <NavLink
      exact
      to="/sent"
      className="w-1/5 bg-blue-300 text-center p-3 "
      activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}
    >
      Sent Messages
    </NavLink>
    {/* <button
      type="button"
      className="w-1/5 bg-blue-300 text-center p-3 rounded rounded-l-none text-lg font-bold tracking-wide justify-end rounded rounded-l-none"
    >
      Log Out
    </button> */}
    {/* <NavLink to="/message/:id">Specific Message</NavLink> */}
  </div>
);

export default NavBar;

import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';

import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      <Signup />
    </div>
  );
};

export default hot(App);

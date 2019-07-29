import { hot } from 'react-hot-loader/root';
import React from 'react';
import Notifications from '../components/Notifications';

import Signup from './Signup';
// import LoginForm from './Login';

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      <Signup />
    </div>
  );
};

export default hot(App);

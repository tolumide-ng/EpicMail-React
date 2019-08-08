import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../../pages/Login/index';
import Signup from '../../pages/Signup';
import Home from '../../pages/Home';
import ResetRequest from '../../pages/ResetRequest';

const AppRouter = () => {
  return (
    <>
      <Route path="/" component={ResetRequest} />
      {/* <Route path="/" component={Login} /> */}
      {/* <Route path="/" exact strict component={Home} /> */}
      {/* <Route path="/" component={Signup} /> */}
    </>
  );
};

export default AppRouter;

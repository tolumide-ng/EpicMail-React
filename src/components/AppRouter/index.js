import React from 'react';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Home from '../../pages/Home';
import { Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <>
      <Route path="/" exact strict component={Home} />
      <Route path="/login" exact strict component={Login} />
      <Route path="/register" exact strict component={Signup} />
    </>
  );
};

export default AppRouter;

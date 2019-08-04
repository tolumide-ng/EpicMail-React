import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';

import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};

export default hot(App);

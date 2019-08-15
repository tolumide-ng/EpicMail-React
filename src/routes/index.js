import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import AppRouter from './AppRouter';

const Routes = () => (
  <Router>
    <AppRouter />
  </Router>
);

export default Routes;
import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import RequestReset from '../pages/RequestReset';
import ComposeMail from '../pages/ComposeMail';
import SentMessages from '../pages/SentMessages';
import SpecificSentMessage from '../pages/specificSentMessage';
import Navbar from '../components/Navbar';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Router>
    <Navbar />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/reset" component={RequestReset} />
      <PrivateRoute exact path="/compose" component={ComposeMail} />
      <PrivateRoute exact path="/sent" component={SentMessages} />
      <PrivateRoute path="/message/:id" component={SpecificSentMessage} />
    </Switch>
  </Router>
);

export default Routes;

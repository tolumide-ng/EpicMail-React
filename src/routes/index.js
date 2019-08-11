import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import RequestReset from '../pages/RequestReset';
import ComposeMail from '../pages/ComposeMail';
import SentMessages from '../pages/SentMessages';
import Navbar from '../components/Navbar';

const Routes = () => (
  <Router>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/reset" component={RequestReset} />
    <Route exact path="/compose" component={ComposeMail} />
    <Route exact path="/sent" component={SentMessages} />
  </Router>
);

export default Routes;

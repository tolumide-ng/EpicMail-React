import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import RequestReset from '../pages/RequestReset';
import ComposeMail from '../pages/ComposeMail';
import Navbar from '../components/Navbar';

const Routes = () => (
  <Router>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/reset" component={RequestReset} />
    <Route exact path="/compose" component={ComposeMail} />
  </Router>
);

// mapStateToProps = (state) => {

// }

export default Routes;

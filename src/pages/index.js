import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import NavBar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import ResetRequest from './RequestReset';

const Routes = ({ history }) => (
  <>
    <NavBar history={history} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/reset-prequest" component={ResetRequest} />
    </Switch>
  </>
);

export default withRouter(Routes);

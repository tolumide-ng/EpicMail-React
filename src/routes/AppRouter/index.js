import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Home from '../../pages/Home';
import Signup from '../../pages/Signup';
import Login from '../../pages/Login';
import RequestReset from '../../pages/RequestReset';
import ComposeMail from '../../pages/ComposeMail';
import SentMessages from '../../pages/SentMessages';
import SpecificSentMessage from '../../pages/specificSentMessage';
import Navbar from '../../components/Navbar';
import PrivateRoute from '../PrivateRoute';

const AppRouter = withRouter(({ location }) => {
  const noNavBarPaths = ['/login', '/signup', '/reset'];
  return (
    <Provider store={store}>
      {/* {noNavBarPaths.forEach(path =>
        location.pathname === path ? '' : <Navbar />
      )} */}
      {noNavBarPaths.includes(location.pathname) ? '' : <Navbar />}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reset" component={RequestReset} />
        <PrivateRoute exact path="/compose" component={ComposeMail} />
        <PrivateRoute exact path="/sent" component={SentMessages} />
        <PrivateRoute path="/message/:id" component={SpecificSentMessage} />
      </Switch>
    </Provider>
  );
});

export default AppRouter;

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { useSetUser } from '../store/hooks';
import Routes from '../pages';
import store from '../store';

const App = () => {
  useSetUser({ ...store });
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;

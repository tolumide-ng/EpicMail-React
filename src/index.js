import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Notification, { notify } from './components/Notifications';
import './main.css';

// import App from './pages/App';
import Signup from './pages/Signup';
import Login from './pages/Login';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

const app = document.querySelector('#app');

render(
  <Provider store={store}>
    {/* <input
      onClick={() => notify('the message')}
      type="button"
      value="Click me"
    />
    <Notification /> */}
    <Login />
    {/* <Signup /> */}
  </Provider>,
  app
);

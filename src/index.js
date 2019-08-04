import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import './styles/main.css';

import store from './store';
import App from './App';
 
const AppithRouter = withRouter(App);

const app = document.querySelector('#app');

render(
  <Provider store={store}>
    <BrowserRouter>
      <AppithRouter />
    </BrowserRouter>
  </Provider>,
  app
);

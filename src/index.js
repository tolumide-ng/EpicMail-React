import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './pages/App';
import rootReducer from './reducers/rootReducer';
import './main.scss';

const store = createStore(rootReducer);

const app = document.querySelector('#app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);

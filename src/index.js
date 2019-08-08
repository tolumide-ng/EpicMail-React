import './styles/main.css';
// import { hot } from 'react-hot-loader/root';
import React from 'react';
import * as Toastr from 'toastr';

import { render } from 'react-dom';
import App from './main';
import '../node_modules/toastr/build/toastr.css';

Toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: 'toast-top-center',
  preventDuplicates: true,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut'
};

const app = document.querySelector('#app');

render(
  // <Provider store={store}>
  //   <BrowserRouter>
  <App />,
  //   </BrowserRouter>
  // </Provider>,
  app
);

// export default hot(App);

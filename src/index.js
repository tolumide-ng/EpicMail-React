import React from 'react';
import { render } from 'react-dom';
import Toastr from 'toastr';

import Main from './main';
import './styles/main.css';

import './toastr.css';

Toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
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

render(<Main />, app);

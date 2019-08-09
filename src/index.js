import React from 'react';
import { render } from 'react-dom';
import Main from './main';
import './styles/main.css';

const app = document.querySelector('#app');

render(<Main />, app);

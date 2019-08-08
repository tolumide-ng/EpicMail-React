import axios from 'axios';
import config from '../config';

export const saveToLocalStorage = user => {
  if (user) {
    localStorage.clear();
    const { token } = user;
    // localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
};

export const axiosCall = ({ method, path, data }) =>
  axios({
    method,
    url: `${config.apiUrl}${path}`,
    data
  });

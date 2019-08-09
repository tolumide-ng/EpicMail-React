import axios from 'axios';
import config from '../config';

export const axiosCall = async ({ path, method, payload }) => {
  const url = `${config.apiUrl}${path}`;
  const result = await axios[method](url, payload);

  const data = result && result.data.data;
  return data;
};

export const saveToLocalStorage = user => {
  if (user) {
    // const { token } = user;
    // localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const emailCheck = email => {
  if (email.endsWith('@epicmail.com')) {
    return email;
  }
  return `${email}@epicmail.com`;
};

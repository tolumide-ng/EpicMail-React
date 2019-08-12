import React from 'react';
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

export const convertDate = date => {
  if (Math.abs(new Date() - new Date('2019-08-10T21:01:32.362Z')) / 36e5 > 24) {
    return `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
  }
  return `${Math.floor(
    Math.abs(new Date() - new Date('2019-08-10T21:01:32.362Z')) / 36e5
  )}hrs ago`;
};

export const limitReceiverLenght = email => {
  return email.slice(0, 15);
};

export const displaySubject = ({ subject, message }) => {
  if (subject.length > 30) {
    return <strong>{subject.slice(0, 30)}</strong>;
  }
  if (subject.length < 15) {
    return (
      <span>
        <strong>{subject}</strong>
        <span> - </span>
        {message && message.slice(0, 15)}
      </span>
    );
  }
  return (
    <span>
      <strong>{subject}</strong>
    </span>
  );
};

export const checkLocalStorage = ({ history }) => {
  let user = localStorage.getItem('user');
  if (!user) return history.push('/login');

  user = JSON.parse(user);
  const { token } = user;
  return token;
};

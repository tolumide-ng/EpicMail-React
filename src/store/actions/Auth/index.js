import React from 'react';
import { Redirect } from 'react-router-dom';
import { setUser } from '../signup';

export const getUser = () => dispatch => {
  /* istanbul ignore next */
  if (localStorage.user) {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    return dispatch(setUser(user));
  }
  dispatch(setUser(''));
};

export default getUser;

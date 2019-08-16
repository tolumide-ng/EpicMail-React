import * as Toastr from 'toastr';
import axios from 'axios';

import {
  SIGNUP_PENDING,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SET_USER
} from '../../actiontypes/auth';
import config from '../../../config';
import { emailCheck, saveToLocalStorage } from '../../../utils';

export const signupPending = () => ({
  type: SIGNUP_PENDING,
  payload: {
    status: 'AuthenticationLoading',
    user: {},
    error: null
  }
});

export const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: {
    status: 'AuthenticationSuccessful',
    user,
    error: null,
    isAuthenticated: true
  }
});

export const setUser = user => ({
  type: 'SET_USER',
  payload: {
    isStarting: false,
    status: 'AuthenticationSuccessful',
    user,
    isAuthenticated: true
  }
});

export const logOutUser = () => ({
  type: 'SET_USER',
  payload: {
    isStarting: false,
    status: 'rest',
    user: {},
    isAuthenticated: false
  }
});

export const setIsStarting = user => ({
  type: 'SET_TOFALSE',
  payload: {
    isStarting: false
  }
});

export const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  payload: {
    status: 'AuthenticationFailure',
    user: {},
    error,
    isAuthenticated: false
  }
});

export const signupAction = ({ userData, history }) => async dispatch => {
  const {
    firstName,
    lastName,
    email: secondaryEmail,
    username: email,
    password
  } = userData;
  dispatch(signupPending());

  try {
    const response = await axios({
      method: 'post',
      url: `${config.apiUrl}auth/signup`,
      data: {
        email: emailCheck(email),
        password,
        firstName,
        lastName,
        secondaryEmail
      }
    });

    const { data } = response.data;

    const user = data[0];

    saveToLocalStorage(user);

    dispatch(signupSuccess(user));
    Toastr.success(`Welcome to epicMail ${email}@epicmail.com`);
    history.push('compose');
  } catch ({ response }) {
    const message = response.data.error || response;
    Toastr.error(message);

    dispatch(signupFailure(message));
  }
};

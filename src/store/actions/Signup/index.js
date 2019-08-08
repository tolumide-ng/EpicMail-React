import axios from 'axios';
import * as Toastr from 'toastr';
import {
  SIGNUP_PENDING,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SETUP_USER,
  CLEAN_UP
} from '../../actiontypes';
import config from '../../../config';
import { saveToLocalStorage, axiosCall } from '../../../utils';

export const signupPending = () => ({
  type: SIGNUP_PENDING,
  payload: {
    isLoading: true,
    isAuthenticated: false,
    isCompleted: false,
    error: null,
    user: {}
  }
});

export const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  payload: {
    isLoading: false,
    isCompleted: true,
    error,
    isAuthenticated: false,
    user: {}
  }
});

export const cleanupAuth = () => ({
  type: CLEAN_UP
});

export const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: {
    isLoading: false,
    isCompleted: true,
    isAuthenticated: true,
    user
  }
});

export const setupUser = user => ({
  type: SETUP_USER,
  payload: {
    isLoading: false,
    isCompleted: true,
    isAuthenticated: true,
    user
  }
});

export const signupAction = ({
  firstName,
  lastName,
  email: secondaryEmail,
  username: email,
  password,
  history
}) => async dispatch => {
  dispatch(cleanupAuth());
  dispatch(signupPending());

  try {
    const response = axiosCall({
      method: 'post',
      path: 'auth/signup',
      data: {
        firstName,
        lastName,
        secondaryEmail,
        email: `${email}@epicmail.com`,
        password
      }
    });

    const user = response.data.data[0];

    /* istanbul ignore next */
    saveToLocalStorage(user);

    /* istanbul ignore next */
    dispatch(signupSuccess(user));

    /* istanbul ignore next */
    history.push('/');
  } catch ({ response }) {
    const message = response.data.error || response;

    /* istanbul ignore next */
    Toastr.error(`${message}`);

    /* istanbul ignore next */
    dispatch(signupFailure(message));
  }
};

export const getUser = () => dispatch => {
  if (localStorage.user) {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    dispatch(setupUser(user));
  }
};

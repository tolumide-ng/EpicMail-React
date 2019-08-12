import * as Toastr from 'toastr';

import {
  SIGNUP_PENDING,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS
} from '../../actiontypes/auth';
import config from '../../../config';
import { axiosCall, emailCheck, saveToLocalStorage } from '../../../utils';

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

export const signupAction = ({
  firstName,
  lastName,
  email: secondaryEmail,
  username: email,
  password
}) => async dispatch => {
  dispatch(signupPending());

  try {
    const response = await axiosCall({
      path: 'auth/signup',
      method: 'post',
      payload: {
        firstName,
        lastName,
        secondaryEmail,
        email: emailCheck(email),
        password
      }
    });

    const user = response[0];

    saveToLocalStorage(user);

    dispatch(signupSuccess(user));
  } catch ({ response }) {
    const message = response.data.error || response;
    Toastr.error(message);

    dispatch(signupFailure(message));
  }
};

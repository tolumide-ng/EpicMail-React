import axios from 'axios';
import * as Toastr from 'toastr';

import {
  LOGIN_PENDING,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  CLEAN_UP
} from '../../actiontypes/index';

import config from '../../../config';
import { saveToLocalStorage } from '../../../utils';

export const loginPending = () => ({
  type: LOGIN_PENDING,
  payload: {
    isLoading: true
  }
});

export const cleanupAuth = () => ({
  type: CLEAN_UP
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: {
    isLoading: false,
    isCompleted: true,
    user
  }
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    isLoading: false,
    isCompleted: true,
    error
  }
});

export const loginAction = ({
  username,
  password,
  history
}) => async dispatch => {
  dispatch(cleanupAuth());
  dispatch(loginPending());

  try {
    const response = await axios({
      method: 'post',
      url: `${config.apiUrl}auth/login`,
      data: {
        email: `${username}@epicmail.com`,
        password
      }
    });

    const user = response.data.data[0];

    saveToLocalStorage(user);
    dispatch(loginSuccess(user));
    // history.push('/');
  } catch ({ response }) {
    // toast message comes in here for netwrok error
    const message = response.data.error || response;
    Toastr.error(`${message}`);
    // toast message comes in here for successful login
    dispatch(loginFailure(message));
  }
};

import axios from 'axios';
import {
  LOGIN_PENDING,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from '../../actiontypes/index';

import config from '../../../config';
import { axiosCall, emailCheck } from '../../../utils';

export const loginPending = () => ({
  type: LOGIN_PENDING,
  payload: {
    status: 'AuthenticationLoading',
    user: {},
    error: null
  }
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: {
    status: 'AuthenticationSuccessful',
    user,
    error: null
  }
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    status: 'AuthenticationFailure',
    user: {},
    error
  }
});

export const loginAction = ({ username, password }) => async dispatch => {
  dispatch(loginPending());

  try {
    const response = await axiosCall({
      method: 'post',
      path: 'auth/login',
      payload: { email: emailCheck(username), password }
    });
    // const response = await axios({
    //   method: 'post',
    //   url: `${config.apiUrl}auth/login`,
    //   data: {
    //     email: `${username}@epicmail.com`,
    //     password
    //   }
    // });

    const user = response.data.data[0];

    dispatch(loginSuccess(user));
  } catch ({ response }) {
    // toast message comes in here for netwrok error
    const message = response.data.error || response;
    // toast message comes in here for successful login
    dispatch(loginFailure(message));
  }
};

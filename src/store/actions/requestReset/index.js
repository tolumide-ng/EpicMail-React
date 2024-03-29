import axios from 'axios';
import * as Toastr from 'toastr';
import {
  REQUEST_RESET_PENDING,
  REQUEST_RESET_SUCCESS,
  REQUEST_RESET_FAILURE
} from '../../actiontypes/auth';

import config from '../../../config';

export const requestResetPending = () => ({
  type: REQUEST_RESET_PENDING,
  payload: {
    requestResetStatus: 'pending'
  }
});

export const requestResetSucces = user => ({
  type: REQUEST_RESET_SUCCESS,
  payload: {
    requestResetStatus: 'success',
    user
  }
});

export const requestResetFailure = error => ({
  type: REQUEST_RESET_FAILURE,
  payload: {
    requestResetStatus: 'error',
    error
  }
});

export const requestResetAction = ({ username }) => async dispatch => {
  dispatch(requestResetPending());

  try {
    const response = await axios({
      method: 'post',
      url: `${config.apiUrl}auth/reset`,
      data: {
        email: `${username}@epicmail.com`
      }
    });
    const user = response.data.data;
    Toastr.success(user);

    dispatch(requestResetSucces(user));
  } catch ({ response }) {
    const message = response.data.error || response;
    Toastr.error('Username specified for password reset does not exist');

    dispatch(requestResetFailure(message));
  }
};

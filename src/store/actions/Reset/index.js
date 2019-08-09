import axios from 'axios';
import {
  REQUEST_RESET_PENDING,
  REQUEST_RESET_SUCCESS,
  REQUEST_RESET_FAILURE
} from '../../actiontypes/auth';

import config from '../../../config';

export const requestResetPending = () => ({
  type: REQUEST_RESET_PENDING,
  payload: {
    isLoading: true
  }
});

export const requestResetSucces = user => ({
  type: REQUEST_RESET_SUCCESS,
  payload: {
    isLoading: false,
    isCompleted: true,
    user
  }
});

export const requestResetFailure = error => ({
  type: REQUEST_RESET_FAILURE,
  payload: {
    isLoading: false,
    isCompleted: true,
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
    const user = response.data.data[0];

    dispatch(requestResetSucces(user));
  } catch ({ response }) {
    const message = response.data.error || response;

    dispatch(requestResetFailure(message));
  }
};

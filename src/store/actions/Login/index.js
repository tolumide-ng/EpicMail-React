import axios from 'axios';
import {
  LOGIN_PENDING,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from '../../actiontypes/index';

import config from '../../../config';

export const loginPending = () => ({
  type: LOGIN_PENDING,
  payload: {
    isLoading: true
  }
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

export const loginAction = ({ username, password }) => async dispatch => {
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

    dispatch(loginSuccess(user));
  } catch ({ response }) {
    console.log(response);
    // toast message comes in here for netwrok error
    const message = response.data.error || response;
    // toast message comes in here for successful login
    dispatch(loginFailure(message));
  }
};

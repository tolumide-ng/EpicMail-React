import * as Toastr from 'toastr';
import axios from 'axios';

import {
  LOGIN_PENDING,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from '../../actiontypes/auth';

import config from '../../../config';
import { emailCheck } from '../../../utils';

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
    error: null,
    isAuthenticated: true
  }
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    status: 'AuthenticationFailure',
    user: {},
    isAuthenticated: false,
    error
  }
});

export const loginAction = ({ userData, history }) => async dispatch => {
  const { username, password } = userData;
  dispatch(loginPending());

  try {
    const response = await axios({
      method: 'post',
      url: `${config.apiUrl}auth/login`,
      data: { email: emailCheck(username), password }
    });

    const { data } = response.data;

    const user = data[0];

    dispatch(loginSuccess(user));

    history.push('/compose');
    return;
  } catch ({ response }) {
    // toast message comes in here for netwrok error
    const message = response.data.error || response;
    Toastr.error(message);
    dispatch(loginFailure(message));
  }
};

export default loginAction;

import axios from 'axios';

import config from '../../../config';
import {
  SIGNUOUT_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNOUT_PENDING
} from '../../actiontypes/auth';

import { checkLocalStorage } from '../../../utils';

export const signoutPending = () => ({
  type: SIGNOUT_PENDING,
  payload: {
    status: 'pending',
    message: null
  }
});

export const signoutSuccess = message => ({
  type: SIGNUOUT_SUCCESS,
  payload: {
    status: 'success',
    message
  }
});

export const signoutFailure = message => ({
  type: SIGNOUT_FAILURE,
  payload: {
    status: 'success',
    message
  }
});

export const signouAction = () => async dispatch => {
  dispatch(signoutPending());

  const token = checkLocalStorage({ history });
  localStorage.length > 0 &&
    localStorage.getItem('user') &&
    localStorage.clear();
};

import axios from 'axios';
import {
  SIGNUP_PENDING,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS
} from '../../actiontypes';
import config from '../../../config';

export const signupPending = () => ({
  type: SIGNUP_PENDING,
  payload: {
    isLoading: true
  }
});

export const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: {
    isLoading: false,
    isCompleted: true,
    user
  }
});

export const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  payload: {
    isLoading: false,
    isCompleted: true,
    error
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
    const response = await axios({
      method: 'post',
      url: `${config.apiUrl}auth/signup`,
      data: {
        firstName,
        lastName,
        secondaryEmail,
        email: `${email}@epicmail.com`,
        password
      }
    });
    const user = response.data.data[0];

    dispatch(signupSuccess(user));
  } catch ({ response }) {
    // Use a toaster for the if scenario's console
    // if (!response) {
    //   return console.log(
    //     'please ensure you are conncted to a network provider'
    //   );
    // }
    const message = response.data.error || response;
    dispatch(signupFailure(message));
  }
};

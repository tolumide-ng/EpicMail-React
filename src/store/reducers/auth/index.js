import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SET_USER
} from '../../actiontypes/auth';

import initialState from '../../initialState';

const authReducer = (state = initialState.auth, { type, payload }) => {
  switch (type) {
    case LOGIN_PENDING:
      return {
        ...state,
        ...payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        ...payload
      };
    case SIGNUP_PENDING:
      return {
        ...state,
        ...payload
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        ...payload
      };
    case SET_USER:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default authReducer;

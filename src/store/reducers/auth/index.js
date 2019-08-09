import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../../actiontypes/auth';

const INITIAL_STATE = {
  status: 'rest',
  error: null,
  isStarting: true,
  user: {}
};

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
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
    case 'SET_USER':
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default authReducer;

import {
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../../actiontypes';

const INITIAL_STATE = {
  status: 'rest',
  error: null,
  user: {}
};

const signupReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
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
    default:
      return state;
  }
};

export default signupReducer;

import {
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SETUP_USER,
  CLEAN_UP
} from '../../actiontypes';

const INITIAL_STATE = {
  isLoading: false,
  isCompleted: false,
  isAuthenticated: false,
  error: null,
  user: {}
};

const signupReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CLEAN_UP:
      return {
        ...state,
        isCompleted: false,
        isLoading: false,
        error: null,
        user: {}
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
    case SETUP_USER:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default signupReducer;

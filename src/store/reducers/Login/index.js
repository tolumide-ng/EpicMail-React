import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAN_UP
} from '../../actiontypes';

const INITIAL_STATE = {
  isLoading: false,
  isCompleted: false,
  error: null,
  user: {}
};

const loginReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CLEAN_UP:
      return {
        ...state,
        isCompleted: false,
        isLoading: false,
        error: null,
        user: {}
      };
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
    default:
      return state;
  }
};

export default loginReducer;

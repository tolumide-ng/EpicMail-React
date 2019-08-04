import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../actiontypes';

const INITIAL_STATE = {
  isLoading: false,
  isCompleted: false,
  error: null,
  user: {}
};

const loginReducer = (state = INITIAL_STATE, { type, payload }) => {
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
    default:
      return state;
  }
};

export default loginReducer;

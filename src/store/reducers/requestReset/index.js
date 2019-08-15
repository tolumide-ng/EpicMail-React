import {
  REQUEST_RESET_PENDING,
  REQUEST_RESET_SUCCESS,
  REQUEST_RESET_FAILURE
} from '../../actiontypes/auth';

import initialState from '../../initialState';

const requestResetReducer = (
  state = initialState.requestReset,
  { type, payload }
) => {
  switch (type) {
    case REQUEST_RESET_PENDING:
      return {
        ...state,
        ...payload
      };
    case REQUEST_RESET_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case REQUEST_RESET_FAILURE:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};

export default requestResetReducer;

import {
  RETRACT_PENDING,
  RETRACT_SUCCESSFUL,
  RETRACT_FAILURE,
  RETRACT_RESET
} from '../../actiontypes/messages';

import initialState from '../../initialState';

const retractMessageReducer = (
  state = initialState.retractMessage,
  { type, payload }
) => {
  switch (type) {
    case RETRACT_PENDING:
      return {
        ...state,
        ...payload
      };
    case RETRACT_SUCCESSFUL:
      return {
        ...state,
        ...payload
      };
    case RETRACT_FAILURE:
      return {
        ...state,
        ...payload
      };
    case RETRACT_RESET:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default retractMessageReducer;

import {
  SENTMESSAGES_PENDING,
  SENTMESSAGES_SUCCESSFUL,
  SENTMESSAGES_FAILURE
} from '../../actiontypes/messages';

import initialState from '../../initialState';

const sentMessagesReducer = (
  state = initialState.sentMessages,
  { type, payload }
) => {
  switch (type) {
    case SENTMESSAGES_PENDING:
      return {
        ...state,
        ...payload
      };
    case SENTMESSAGES_SUCCESSFUL:
      return {
        ...state,
        ...payload
      };
    case SENTMESSAGES_FAILURE:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default sentMessagesReducer;

import {
  DELETEMESSAGE_PENDING,
  DELETEMESSAGE_SUCCESSFUL,
  DELETEMESSAGE_FAILURE,
  RESET_DELETEMESSAGE_STATUS
} from '../../actiontypes/messages';

import initialState from '../../initialState';

const deleteMessagesReducer = (
  state = initialState.deleteMessage,
  { type, payload }
) => {
  switch (type) {
    case DELETEMESSAGE_PENDING:
      return {
        ...state,
        ...payload
      };
    case DELETEMESSAGE_FAILURE:
      return {
        ...state,
        ...payload
      };
    case DELETEMESSAGE_SUCCESSFUL:
      return {
        ...state,
        ...payload
      };
    case RESET_DELETEMESSAGE_STATUS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default deleteMessagesReducer;

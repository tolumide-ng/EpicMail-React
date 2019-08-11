import {
  FETCH_SPECIFICSENTMESSAGE_PENDING,
  FETCH_SPECIFICSENTMESSAGE_SUCCESS,
  FETCH_SPECIFICSENTMESSAGE_FAILURE,
  RESET_FETCHSPECIFICSENTMESSAGE_STATUS
} from '../../actiontypes/messages';

import initialState from '../../initialState';

const specificMessageReducer = (
  state = initialState.specificSentMessage,
  { type, payload }
) => {
  switch (type) {
    case FETCH_SPECIFICSENTMESSAGE_PENDING:
      return {
        ...state,
        ...payload
      };
    case FETCH_SPECIFICSENTMESSAGE_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case FETCH_SPECIFICSENTMESSAGE_FAILURE:
      return {
        ...state,
        ...payload
      };
    case RESET_FETCHSPECIFICSENTMESSAGE_STATUS:
      return {
        ...state,
        ...payload
      };
    default:
      return {
        ...state,
        ...payload
      };
  }
};

export default specificMessageReducer;

import {
  COMPOSEDRAFT_PENDING,
  COMPOSEDRAFT_SUCCESSFUL,
  COMPOSEDRAFT_FAILURE
} from '../../actiontypes/messages';

import initialState from '../../initialState';

const composeDraftReducer = (
  state = initialState.composeDraft,
  { type, payload }
) => {
  switch (type) {
    case COMPOSEDRAFT_PENDING:
      return {
        ...state,
        ...payload
      };
    case COMPOSEDRAFT_FAILURE:
      return {
        ...state,
        ...payload
      };
    case COMPOSEDRAFT_SUCCESSFUL:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default composeDraftReducer;

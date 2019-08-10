import {
  COMPOSE_PENDING,
  COMPOSE_SUCCESSFUL,
  COMPOSE_FAILURE
} from '../../actiontypes/messages';

const INITIAL_STATE = {
  status: 'rest',
  error: null,
  user: {}
};

const composeMailReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case COMPOSE_PENDING:
      return {
        ...state,
        ...payload
      };
    case COMPOSE_SUCCESSFUL:
      return {
        ...state,
        ...payload
      };
    case COMPOSE_FAILURE:
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
};

export default composeMailReducer;

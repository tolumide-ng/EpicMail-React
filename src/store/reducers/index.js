import { combineReducers } from 'redux';
import authReducer from './auth';
import requestResetReducer from './requestReset';
import composeMailReducer from './composeMail';
import composeDraftReducer from './composeDraft';
import sentMessagesReducer from './sentMessages';
import deleteMessageReducer from './deleteMessage';

const rootReducer = combineReducers({
  authReducer,
  requestResetReducer,
  composeMailReducer,
  composeDraftReducer,
  sentMessagesReducer,
  deleteMessageReducer
});

export default rootReducer;

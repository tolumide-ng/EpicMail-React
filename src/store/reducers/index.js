import { combineReducers } from 'redux';
import authReducer from './auth';
import requestResetReducer from './requestReset';
import composeMailReducer from './composeMail';
import composeDraftReducer from './composeDraft';
import sentMessagesReducer from './sentMessages';
import deleteMessageReducer from './deleteMessage';
import specificSentMessageReducer from './specificSentMessage';
import retractMessageReducer from './retractMessage';

const rootReducer = combineReducers({
  authReducer,
  requestResetReducer,
  composeMailReducer,
  composeDraftReducer,
  sentMessagesReducer,
  deleteMessageReducer,
  specificSentMessageReducer,
  retractMessageReducer
});

export default rootReducer;

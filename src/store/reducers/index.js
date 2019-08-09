import { combineReducers } from 'redux';
import authReducer from './auth';
import requestResetReducer from './RequestReset';
import composeMailReducer from './composeMail';

const rootReducer = combineReducers({
  authReducer,
  requestResetReducer,
  composeMailReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import signupReducer from './Signup';
import loginReducer from './Login';
import requestResetReducer from './RequestReset';

const rootReducer = combineReducers({
  signupReducer,
  loginReducer,
  requestResetReducer
});

export default rootReducer;

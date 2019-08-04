import { combineReducers } from 'redux';
import signupReducer from './Signup';
import loginReducer from './Login';

const rootReducer = combineReducers({
  signupReducer,
  loginReducer
});

export default rootReducer;

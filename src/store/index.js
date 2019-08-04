import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';


const middlewares = applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  composeWithDevTools(middlewares)
  );


export default store;
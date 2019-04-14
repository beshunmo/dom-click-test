import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loginReducer from './login-reducer';

const reducers = history => combineReducers({
  router: connectRouter(history),
  login: loginReducer
});

export default reducers;

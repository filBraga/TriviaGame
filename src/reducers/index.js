import { combineReducers } from 'redux';
import userReducer from './user';
import token from './token';

const rootReducer = combineReducers({
  player: userReducer,
  token,

});

export default rootReducer;

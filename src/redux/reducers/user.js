// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_EMAIL_TYPE, ADD_USER_NAME_TYPE } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: '',
  gravatarEmail: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL_TYPE:
    // console.log('chegou');
    return {
      ...state,
      gravatarEmail: action.payload,
    };
  case ADD_USER_NAME_TYPE:
    // console.log('chegou');
    return {
      ...state,
      name: action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;

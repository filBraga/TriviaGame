import { GET_LOCATION_SUCCESS_TYPE, GET_LOCATION_FAIL_TYPE } from '../actions/index';
// const INITIAL_STATE = {
//   token: '',
// };
const token = (state = '', action) => {
  switch (action.type) {
  case GET_LOCATION_SUCCESS_TYPE:
    return action.payload;
  case GET_LOCATION_FAIL_TYPE:
    return {
      error: 'DEU RUIM NA API',
    };
  default:
    return state;
  }
};
export default token;

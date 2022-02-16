export const ADD_EMAIL_TYPE = 'ADD_EMAIL';
export const ADD_USER_NAME_TYPE = 'ADD_USER_NAME';
export const GET_LOCATION_SUCCESS_TYPE = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAIL_TYPE = 'GET_LOCATION_FAIL';
export const GET_SCORE_TYPE = 'GET_SCORE';

export const getSuccess = (payload) => ({
  type: GET_LOCATION_SUCCESS_TYPE,
  payload,
});

export const getFail = () => ({
  type: GET_LOCATION_FAIL_TYPE,
});

export const gettokenThunk = (payload) => (dispatch) => {
  // console.log(email);
  try {
    dispatch(getSuccess(payload));
  } catch (error) {
    console.log('Erro');
    dispatch(getFail());
  }
};

export const setUserName = (payload) => ({
  type: ADD_USER_NAME_TYPE,
  payload,
});

export const setEmail = (payload) => ({
  type: ADD_EMAIL_TYPE,
  payload,
});

export const setScore = (payload) => ({
  type: GET_SCORE_TYPE,
  payload,
});

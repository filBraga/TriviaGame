import tokenAPI from '../services/tokenAPI';

export const ADD_EMAIL_TYPE = 'ADD_EMAIL';
export const ADD_USER_NAME_TYPE = 'ADD_USER_NAME';
export const GET_LOCATION_SUCCESS_TYPE = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAIL_TYPE = 'GET_LOCATION_FAIL';

export const getGravatarSuccess = (payload) => ({
  type: GET_LOCATION_SUCCESS_TYPE,
  payload,
});

export const getLocationFail = () => ({
  type: GET_LOCATION_FAIL_TYPE,
});

export const gettokenThunk = () => async (dispatch) => {
  // console.log(email);
  try {
    const location = await tokenAPI();
    // console.log(location);
    dispatch(getGravatarSuccess(location));
  } catch (error) {
    console.log('Erro');
    dispatch(getLocationFail());
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

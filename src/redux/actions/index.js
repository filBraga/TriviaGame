// import coinAPI from '../services/coinApi';

export const ADD_EMAIL_TYPE = 'ADD_EMAIL';
export const ADD_USER_NAME_TYPE = 'ADD_USER_NAME';
// export const GET_LOCATION = 'GET_LOCATION';

// export const getCoinSuccess = (payload) => ({
//   type: GET_LOCATION_SUCCESS,
//   payload,
// });

// export const getLocationFail = () => ({
//   type: GET_LOCATION_FAIL,
// });

// export const getCoinThunk = () => async (dispatch) => {
//   try {
//     const location = await coinAPI();
//     // console.log(location);
//     dispatch(getCoinSuccess(location));
//   } catch (error) {
//     console.log('Erro');
//     dispatch(getLocationFail());
//   }
// };

export const setEmail = (payload) => ({
  type: ADD_EMAIL_TYPE,
  payload,
});

export const setUserName = (payload) => ({
  type: ADD_USER_NAME_TYPE,
  payload,
});

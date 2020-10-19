import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateChickenDetails(action) {
  console.log('hit updateChickenDetails with chicken id:', action.payload);
  // let response = yield axios({
  //   method: "PUT",
  //   url: `api/chicken/details/${action.payload}`
  // });
  // yield put({
  //   type: 'SET_CHICKEN_DETAILS',
  //   payload: response.data
  // });
}



function* updateChickenDetailsSaga() {
  yield takeLatest('UPDATE_CHICKEN_DETAILS', updateChickenDetails);
}

export default updateChickenDetailsSaga;
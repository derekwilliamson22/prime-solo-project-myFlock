import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchChickenDetails(action) {
  console.log('hit fetchChickenDetails', action.url);
  let response = yield axios({
    method: "GET",
    url: 'api/chicken'
  });
  yield put({
    type: 'SET_CHICKEN_DETAILS',
    payload: response.data
  });
}



function* fetchChickenDetailsSaga() {
  yield takeLatest('FETCH_CHICKEN_DETAILS', fetchChickenDetails);
}

export default fetchChickenDetailsSaga;
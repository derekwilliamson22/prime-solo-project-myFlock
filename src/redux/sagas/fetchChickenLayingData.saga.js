import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchChickenLayingData(action) {
  console.log('hit fetchChickenLayingData');
  let response = yield axios({
    method: "GET",
    url: `api/chicken/layingData`
  });
  yield put({
    type: 'SET_CHICKEN_LAYING_DATA',
    payload: response.data
  });
}



function* fetchChickenLayingDataSaga() {
  yield takeLatest('FETCH_CHICKEN_LAYING_DATA', fetchChickenLayingData);
}

export default fetchChickenLayingDataSaga;
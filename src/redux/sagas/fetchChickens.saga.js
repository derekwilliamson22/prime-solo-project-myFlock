import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchChickens(action) {
  console.log('hit fetchChickens', action.url);
  let response = yield axios({
    method: "GET",
    url: 'api/chicken'
  });
  yield put({
    type: 'SET_CHICKENS',
    payload: response.data
  });
}



function* fetchChickensSaga() {
  yield takeLatest('FETCH_CHICKENS', fetchChickens);
}

export default fetchChickensSaga;
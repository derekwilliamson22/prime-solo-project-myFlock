import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchChickens(action) {
  console.log('hit fetchChickens', action.url);
  let response = yield axios({
    method: 'GET',
    url: action.url
  });
  yield put({
    type: 'SET_CHICKENS',
    payload: response.data
  });
}



function* fetchChickenSaga() {
  yield takeLatest('FETCH_CHICKENS', fetchChickens);
}

export default fetchChickenSaga;
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCoop(action) {
  console.log('hit fetchCoop', action.payload);
  let response = yield axios({
    method: 'GET',
    url: `/api/coop`
  });
  yield put({
    type: 'SET_COOP',
    payload: response.data
  });
}

function* coopSaga() {
  yield takeLatest('FETCH_COOP', fetchCoop);
}

export default coopSaga;

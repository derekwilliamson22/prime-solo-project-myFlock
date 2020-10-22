import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchLayingData(action) {
  console.log('hit fetchLayingData', action.payload);
  let response = yield axios({
    method: "GET",
    url: 'api/chicken/data',
    params: action.payload
  });
  yield put({
    type: 'SET_LAYING_DATA',
    payload: response.data
  });
}



function* fetchLayingDataSaga() {
  yield takeLatest('FETCH_LAYING_DATA', fetchLayingData);
}

export default fetchLayingDataSaga;
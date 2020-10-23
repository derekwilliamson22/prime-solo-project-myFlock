import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addDailyData(action) {
  console.log('hit addDailyData', action.payload); 
    
  // yield axios({
  //     method: 'POST',
  //     url: 'api/chicken',
  //     data: action.payload
  //   });
  // yield put({
  //   type: 'FETCH_CHICKENS'
  //   });
}

function* addDailyDataSaga() {
  yield takeLatest('CREATE_DAILY_DATA', addDailyData);
}

export default addDailyDataSaga;
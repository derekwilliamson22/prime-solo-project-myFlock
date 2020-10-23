import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addDailyData(action) {
  console.log('hit addDailyData', action.payload); 
    
  yield axios({
      method: 'POST',
      url: 'api/chicken/dailyData',
      data: action.payload
    });

}

function* addDailyDataSaga() {
  yield takeLatest( "CREATE_DAILY_DATA", addDailyData);
}

export default addDailyDataSaga;
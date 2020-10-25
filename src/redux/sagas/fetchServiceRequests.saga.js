import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchServiceRequests(action) {
  console.log('hit get serviceRequests'); 
    
  let response = yield axios({
      method: 'GET',
      url: 'api/user/requests',
    });
  yield put({
    type: 'SET_SERVICE_REQUESTS',
    payload: response.data
    });
}

function* fetchServiceRequestsSaga() {
  yield takeLatest("FETCH_SERVICE_REQUESTS", fetchServiceRequests);
}

export default fetchServiceRequestsSaga;
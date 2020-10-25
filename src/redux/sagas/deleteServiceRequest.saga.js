import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteServiceRequest(action) {
  console.log('hit delete service request', action.payload); 
    
  yield axios({
      method: 'DELETE',
      url: `api/user/request/${action.payload}`
    });
  yield put({
    type: "FETCH_SERVICE_REQUESTS"
    });
}

function* deleteServiceRequestSaga() {
  yield takeLatest("REMOVE_SERVICE_REQUEST", deleteServiceRequest);
}

export default deleteServiceRequestSaga;
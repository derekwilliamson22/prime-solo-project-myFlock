import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* requestService(action) {
  console.log('what is the service request', action.payload);
  
  yield axios({
    method: 'POST',
    url: 'api/coop/service',
    data: action.payload
  });
}

function* requestServiceSaga() {
  yield takeLatest('SEND_SERVICE_REQUEST', requestService);
}

export default requestServiceSaga;

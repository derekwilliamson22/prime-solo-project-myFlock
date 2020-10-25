import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchRegisteredUsers(action) {
  console.log('hit get registeredUsers'); 
    
  let response = yield axios({
      method: 'GET',
      url: 'api/user/registered',
    });
  yield put({
    type: 'SET_REGISTERED_USERS',
    payload: response.data
    });
}

function* fetchRegisteredUsersSaga() {
  yield takeLatest("FETCH_REGISTERED_USERS", fetchRegisteredUsers);
}

export default fetchRegisteredUsersSaga;
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchRegisteredUsers(action) {
  console.log('hit get registeredUsers'); 
    
  yield axios({
      method: 'GET',
      url: 'api/user/users',
    });
  yield put({
    type: 'SET_REGISTERED_USERS'
    });
}

function* fetchRegisteredUsersSaga() {
  yield takeLatest("FETCH_REGISTERED_USERS", fetchRegisteredUsers);
}

export default fetchRegisteredUsersSaga;
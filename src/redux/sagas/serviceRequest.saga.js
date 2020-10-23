import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* requestService(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });

    // passes the username and password from the payload to the server
    yield axios.post('/api/user/register', action.payload);

    yield put({type: 'REGISTRATION_SUCCESS'})
    // // automatically log a user in after registration
    // yield put({ type: 'LOGIN', payload: action.payload });
    yield put({type: 'CLEAR_REGISTRATION_ERROR'})
    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({ type: 'SET_TO_LOGIN_MODE' });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* requestServiceSaga() {
  yield takeLatest('REGISTER', requestService);
}

export default requestServiceSaga;

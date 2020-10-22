import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteChicken(action) {
  console.log('hit delete Chicken', action.payload); 
    
  yield axios({
      method: 'DELETE',
      url: `api/chicken/${action.payload}`
    });
  yield put({
    type: 'FETCH_CHICKENS'
    });
}

function* deleteChickenSaga() {
  yield takeLatest("REMOVE_CHICKEN", deleteChicken);
}

export default deleteChickenSaga;
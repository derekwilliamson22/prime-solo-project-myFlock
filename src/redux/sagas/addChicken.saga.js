import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createChicken(action) {
  console.log('hit createChicken', action.payload); 
    
  yield axios({
      method: 'POST',
      url: 'api/chicken',
      data: action.payload
    });
  yield put({
    type: 'FETCH_CHICKENS'
    });
}

function* createChickenSaga() {
  yield takeLatest('CREATE_CHICKEN', createChicken);
}

export default createChickenSaga;
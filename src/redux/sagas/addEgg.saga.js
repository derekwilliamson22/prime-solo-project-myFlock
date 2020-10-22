import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addEgg(action) {
  console.log('hit Add EGG', action.payload); 
    
  yield axios({
      method: 'POST',
      url: 'api/chicken/laying',
      data: action.payload
    });
  yield put({
    type: 'FETCH_CHICKENS'
    });
}

function* addEggSaga() {
  yield takeLatest("ADD_EGG", addEgg);
}

export default addEggSaga;
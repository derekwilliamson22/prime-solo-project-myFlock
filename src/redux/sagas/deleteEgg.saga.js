import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteEgg(action) {
  console.log('hit delete EGG', action.payload); 
    
  yield axios({
      method: 'DELETE',
      url: 'api/chicken/laying/remove',
      data: action.payload
    });
  yield put({
    type: 'FETCH_CHICKENS'
    });
}

function* deleteEggSaga() {
  yield takeLatest("DELETE_EGG", deleteEgg);
}

export default deleteEggSaga;
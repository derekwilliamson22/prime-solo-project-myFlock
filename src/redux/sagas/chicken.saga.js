import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchChickens(action) {
  console.log('hit fetchChickens', action.url);
  let response = yield axios({
    method: 'GET',
    url: action.url
  });
  yield put({
    type: 'SET_CHICKENS',
    payload: response.data
  });
}

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

function* chickenSaga() {
  yield takeLatest('FETCH_CHICKENS', fetchChickens);
  yield takeLatest('CREATE_CHICKEN', createChicken);
}

export default chickenSaga;
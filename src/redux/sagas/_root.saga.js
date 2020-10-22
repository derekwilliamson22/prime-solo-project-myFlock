import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import coopSaga from './coop.saga';
import addChickenSaga from './addChicken.saga';
import fetchChickensSaga from './fetchChickens.saga';
import fetchChickenDetailsSaga from './fetchChickenDetails.saga';
import updateChickenDetailsSaga from './updateChickenDetails.saga';
import fetchChickenLayingDataSaga from './fetchChickenLayingData.saga';
import addEgg from './addEgg.saga'
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    coopSaga(),
    addChickenSaga(),
    fetchChickensSaga(),
    fetchChickenDetailsSaga(),
    updateChickenDetailsSaga(),
    fetchChickenLayingDataSaga(),
    addEgg(),
  ]);
}

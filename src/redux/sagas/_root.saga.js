import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import coopSaga from './coop.saga';
import addChickenSaga from './addChicken.saga';
import deleteChickenSaga from './deleteChicken.saga';
import fetchChickensSaga from './fetchChickens.saga';
import fetchChickenDetailsSaga from './fetchChickenDetails.saga';
import updateChickenDetailsSaga from './updateChickenDetails.saga';
import fetchChickenLayingDataSaga from './fetchChickenLayingData.saga';
import addEggSaga from './addEgg.saga';
import deleteEggSaga from './deleteEgg.saga';
import fetchLayingDataSaga from './fetchLayingData.saga';
import addDailyDataSaga from './addDailyData.saga';
import requestServiceSaga from './serviceRequest.saga';
import fetchRegisteredUsersSaga from './fetchRegisteredUsers.saga';
import fetchServiceRequestsSaga from './fetchServiceRequests.saga';
import deleteServiceRequestSaga from './deleteServiceRequest.saga';
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
    fetchChickensSaga(),
    fetchLayingDataSaga(),
    addDailyDataSaga(),
    addChickenSaga(),
    fetchChickenDetailsSaga(),
    updateChickenDetailsSaga(),
    addEggSaga(),
    deleteEggSaga(),
    deleteChickenSaga(),
    fetchChickenLayingDataSaga(),
    requestServiceSaga(),
    fetchRegisteredUsersSaga(),
    fetchServiceRequestsSaga(),
    deleteServiceRequestSaga(),   
    
  ]);
}

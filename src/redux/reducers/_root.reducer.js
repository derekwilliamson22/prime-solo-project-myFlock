import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import coop from './coop.reducer';
import date from './date.reducer';
import chicken from './chicken.reducer';
import chickenDetails from './chickenDetails.reducer';
import layingData from './chickenLayingData.reducer';
import data from './layingData.reducer';
import userList from './registeredUser.reducer';
import serviceRequests from './serviceRequests.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  coop,
  date,
  chicken,
  chickenDetails,
  layingData,
  data,
  userList,
  serviceRequests,
});

export default rootReducer;

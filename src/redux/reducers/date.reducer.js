import {addDays, subDays} from 'date-fns';
// date reducer
const dateReducer = (state = new Date(), action) => {
  
  if(action.type === "SET_YESTERDAY") {
    let nextDate = subDays(state, 1);
      return nextDate;
  }
  
  if(action.type === "SET_TOMORROW") {
    let nextDate = addDays(state, 1);
      return nextDate;
  }
  if(action.type === "UNSET_DATE") {
    return new Date();
  }
  return state

}
export default dateReducer;
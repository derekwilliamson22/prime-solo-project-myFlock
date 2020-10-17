//import { format, addDays, subDays } from 'date-fns';

const counterForDate = {
  counterForDate: 0
}
// speed reducer
const dateReducer = (state = counterForDate, action) => {
  if(action.type === "SET_INCREASE") {
    return {
      ...state,
      counterForDate: state.counterForDate + 1
    }
  }
  if(action.type === "SET_DECREASE") {
    return {
      ...state,
      counterForDate: state.counterForDate - 1
    }
  }
  return state

}
export default dateReducer;
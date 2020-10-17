const counterForDate = {
  counterForDate: 0
}
// speed reducer
const dateReducer = (state = counterForDate, action) => {
  console.log('what is the action type', action.type);
  
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
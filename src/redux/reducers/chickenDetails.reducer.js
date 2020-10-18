const chickenDetailsReducer = (state = [], action) => {
  // console.log('what is the action.payload for coopreducer', action.payload);
  
  switch (action.type) {    
    case 'SET_CHICKEN_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default chickenDetailsReducer;
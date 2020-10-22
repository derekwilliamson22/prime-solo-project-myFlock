const chickenReducer = (state = [], action) => {
  // console.log('what is the action.payload for coopreducer', action.payload);
  
  switch (action.type) {    
    case 'SET_CHICKENS':
      return action.payload;
      case 'UNSET_CHICKENS':
        return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default chickenReducer;
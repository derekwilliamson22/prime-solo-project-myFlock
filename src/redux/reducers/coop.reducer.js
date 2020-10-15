const coopReducer = (state = {}, action) => {
  // console.log('what is the action.payload for coopreducer', action.payload);
  
  switch (action.type) {    
    case 'SET_COOP':
      return action.payload;
      case 'UNSET_COOP':
        return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default coopReducer;
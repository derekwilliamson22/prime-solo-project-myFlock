const serviceRequestReducer = (state = [], action) => {
  // console.log('what is the action.payload for coopreducer', action.payload);
  
  switch (action.type) {    
    case 'SET_SERVICE_REQUESTS':
      return action.payload;
      case 'UNSET_SERVICE_REQUESTS':
        return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default serviceRequestReducer;
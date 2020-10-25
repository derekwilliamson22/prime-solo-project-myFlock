const registeredUserReducer = (state = [], action) => {
  // console.log('what is the action.payload for coopreducer', action.payload);
  
  switch (action.type) {    
    case 'SET_REGISTERED_USERS':
      return action.payload;
      case 'UNSET_REGISTERED_USERS':
        return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default registeredUserReducer;
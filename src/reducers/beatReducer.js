function beatReducer(state = {currentList: []}, action) {
  const {type, payload} = action;

  switch(type) {
    case 'SET_CURRENT_LIST':
      return {...state, currentList: payload};
    default: 
      return state;
  }
}

export default beatReducer;
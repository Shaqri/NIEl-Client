function licenseReducer(state = {all: []}, action) {
  const {type, payload} = action;

  switch(type) {
    case 'SET_ALL':
      return {...state, all: payload};
    default: 
      return state;
  }
}

export default licenseReducer;
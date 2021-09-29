function userReducer(state = {}, action) {
  const {type, payload} = action;

  switch(type) {
    case 'SET_USER': 
      return {...state, current: payload};
    default: 
      return state;
  }
}

export default userReducer;
function genreReducer(state = {current: null, all: []}, action) {
  const {type, payload} = action;

  switch(type) {
    case 'SET_ALL':
      return {...state, all: payload};
    case 'SET CURRENT': 
      return {...state, current: payload}
    default: 
      return state;
  }
}

export default genreReducer;
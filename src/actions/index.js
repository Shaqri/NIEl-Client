import axios from 'axios';
import {usersURL, authURL} from '../API';

const SET_USER = 'SET_USER';

const setUser = (data) => {
  return {type: SET_USER, payload: data} 
};

const authenticateUser = (data) => {
  return async (dispatch) => {
    try {
      const request = await axios.post(authURL, data);
      dispatch(setUser(request.data.data.attributes));
    }catch(error) {
      console.log(error.response.data)
    }
  };
};

const createUser = (userParams) => {
  return async (dispatch) => {
    try {
      const request = await axios.post(usersURL, userParams);
      dispatch(setUser(request.data.data.attributes))
    }catch(error) {
      console.log(error.response.data);
    }
  }
};

export {
  createUser,
  authenticateUser,
  setUser,
}
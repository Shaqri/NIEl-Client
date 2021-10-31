import axios from 'axios';
import {usersURL, authURL, genresURL} from '../API';

const SET_USER = 'SET_USER';
const SET_ALL_GENRES = 'SET_ALL';

const setUser = (data) => {
  return {type: SET_USER, payload: data} 
};

const authenticateUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(authURL, data);
      dispatch(setUser(response.data.data.attributes));
    }catch(error) {
      console.log(error.response.data)
    }
  };
};

const createUser = (userParams) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(usersURL, userParams);
      dispatch(setUser(response.data.data.attributes))
    }catch(error) {
      console.log(error.response.data);
    }
  }
};

const setAllGenres = (list) => ({
  type: SET_ALL_GENRES, payload: list
});

const getGenres = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(genresURL);
      console.log(response.data.data)
      dispatch(setAllGenres(response.data.data))
    }catch (error) {
      console.log(error.response.data)
    }
  }
};

const getBeats = () => {
  return () => {}
};

export {
  createUser,
  authenticateUser,
  setUser,
  getGenres,
  getBeats,
  
}
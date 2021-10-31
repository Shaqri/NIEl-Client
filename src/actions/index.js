import axios from 'axios';
import {usersURL, authURL, genresURL} from '../API';

const SET_USER = 'SET_USER';
const SET_ALL_GENRES = 'SET_ALL';
const SET_CURRENT_BEATS_LIST = 'SET_CURRENT_LIST';

const setUser = (data) => {
  return {type: SET_USER, payload: data} 
};

const setCurrentBeatsList = (list) => ({
  type: SET_CURRENT_BEATS_LIST, payload: list
});

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
      dispatch(setAllGenres(response.data.data))
    }catch (error) {
      console.log(error.response.data)
    }
  }
};

const getBeats = (genre) => {
  return async (dispatch) => {
    try {
      const genreSlug = genre ? genre : 'all';
      const response = await axios.get(`${genresURL}/${genreSlug}/tracks`);
      dispatch(setCurrentBeatsList(response.data.data))
      console.log(response.data.data)
    } catch(error) {
      console.log(error.response.data)
    }
  }
};

export {
  createUser,
  authenticateUser,
  setUser,
  getGenres,
  getBeats,
  
}
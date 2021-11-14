import axios from 'axios';
import {usersURL, authURL, genresURL, 
  tracksURL, licensesURL} from '../API';

const SET_USER = 'SET_USER';
const SET_ALL_GENRES = 'SET_ALL';
const SET_CURRENT_BEATS_LIST = 'SET_CURRENT_LIST';
const SET_ALL_LICENSES = 'SET_ALL_LICENSES';

const setUser = (data) => {
  return {type: SET_USER, payload: data} 
};

const setCurrentBeatsList = (list) => ({
  type: SET_CURRENT_BEATS_LIST, payload: list
});

const setAllLicenses = (list) => ({
  type: SET_ALL_LICENSES, payload: list 
});

const authenticateUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(authURL, data);
      console.log(response.data)
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
      console.log(response.data.data)
    }catch (error) {
      console.log(error.response.data)
    }
  }
};


const getBeats = (genreSlugs) => {
  return async (dispatch) => {
    try {
        const url = genreSlugs ? `${tracksURL}?genres=${genreSlugs}` : tracksURL;
        const response = await axios.get(url);
        console.log(response)
        dispatch(setCurrentBeatsList(response.data.data));
      
    } catch(error) {
      console.log(error)
    }
  }
};

const getLicenses =  () => {
  return async(dispatch) => {
    try {
      const response = await axios.get(licensesURL);
      console.log(response)
      dispatch(setAllLicenses(response.data.data));
    }catch(error) {
      console.log(error)
    }
  }
};

export {
  createUser,
  authenticateUser,
  setUser,
  getGenres,
  getBeats,
  getLicenses,
}
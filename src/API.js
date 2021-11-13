const baseURL = process.env.REACT_APP_API_URL;

const usersURL = `${baseURL}/users`;
const authURL = `${baseURL}/authentication`
const genresURL = `${baseURL}/genres`
const tracksURL = `${baseURL}/tracks`
const licensesURL = `${baseURL}/licenses`
const directUploadURL = `${baseURL}/direct_upload`

export {
  usersURL,
  authURL,
  genresURL,
  tracksURL,
  licensesURL,
  directUploadURL
}
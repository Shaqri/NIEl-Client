const baseURL = () => process.env.REACT_APP_API_URL;

const usersURL = `${baseURL()}/api/v1/users`;
const authURL = `${baseURL()}/api/v1/authentication`

export {
  usersURL,
  authURL
}
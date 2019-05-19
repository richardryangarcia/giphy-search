import axios from '../configs/axios';
const host = process.env.REACT_APP_AXIOS_BASE_URL;

export const createMongoUser = (uid, firstName, lastName, email) => {
  return axios.post(`${host}/api/v1/register`, {uid, firstName, lastName, email})
  .then((response) => response.data )
  .catch(error => {
    console.log(error);
  })
}

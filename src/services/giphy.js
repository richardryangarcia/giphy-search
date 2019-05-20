import axios from '../configs/axios';
const host = process.env.REACT_APP_AXIOS_BASE_URL;

export const getTrendingGifs = () => {
  return axios.get(`${host}/api/v1/trending`)
  .then((response) => response.data )
  .catch(error => {
    console.log(error);
  })
}
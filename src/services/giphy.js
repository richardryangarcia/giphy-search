import axios from '../configs/axios';

export const getTrendingGifs = () => {
  return axios.get('http://localhost:3001/api/v1/trending')
  .then((response) => response.data )
  .catch(error => {
    console.log(error);
  })
}

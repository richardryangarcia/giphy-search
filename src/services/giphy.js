import axios from '../configs/axios';
const host = process.env.REACT_APP_AXIOS_BASE_URL;

export const getTrendingGifs = () => {
  return axios.get(`${host}/api/v1/trending`)
  .then((response) => response.data )
  .catch(error => {
    console.log(error);
  })
}

export const searchGifs = (keyword) => {
  return axios.get(`${host}/api/v1/search`, { params: { q: keyword }})
  .then((response) => response.data )
  .catch(error => {
    console.log(error);
  })
}

export const getFavoriteGifs = () => {
  return axios.get(`${host}/api/v1/get-favorites`)
  .then((response) => response.data )
  .catch(error => {
    console.log(error);
  })
}

export const updateFavoritesGifs = (gif_id) => {
  return axios.post(`${host}/api/v1/update-favorites`, { gif_id })
  .then((response) => response.data )
  .catch(error => {
    console.log(error);
  })
}

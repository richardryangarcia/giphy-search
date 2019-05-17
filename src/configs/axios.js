import axios from 'axios';

const authHeader = () => {
  const token = window.localStorage.getItem('hebCodeChallenge.accessToken');
  return token ? token : '';
}

axios.defaults.baseUrl = process.env.REACT_APP_AXIOS_BASE_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.default.headers.common.Authorization = authHeader();

export default axios;

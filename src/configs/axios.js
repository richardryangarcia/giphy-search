import axios from 'axios';

const authHeader = () => {
  const token = window.localStorage.getItem('hebCodeChallenge.accessToken');
  return token ? token : '';
}

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common.Authorization = authHeader();

export default axios;

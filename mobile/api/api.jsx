import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.30.33:3000/api',
});

export default api;

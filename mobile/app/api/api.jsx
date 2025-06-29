import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.26:3000/api',
  timeout: 5000,
});

export default api;


import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.100.26:3000/api',
});

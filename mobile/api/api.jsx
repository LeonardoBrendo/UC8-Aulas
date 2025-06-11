import axios from 'axios';

export default axios.create({
  baseURL: 'http://10.0.30.33:3000/api',
});

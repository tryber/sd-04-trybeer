import axios from 'axios';

const loginApi = async (email, password) =>
  axios.post('http://localhost:3001/login', { email, password });

export default loginApi;

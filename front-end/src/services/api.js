import axios from 'axios';

const apiTrybeer = axios.create({
  baseURL: 'http://localhost:3001',
});

const loginApi = async (email, password) => apiTrybeer.post('/login', { email, password });

const getUserByEmail = async (email) => axios.get(`/${email}`);

export default { loginApi, getUserByEmail };

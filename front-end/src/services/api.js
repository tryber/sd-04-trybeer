import axios from 'axios';
import { getLS } from '../helpers/index';

const apiTrybeer = axios.create({
  baseURL: 'http://localhost:3001',
});

const loginApi = async (email, password) => apiTrybeer.post('/login', { email, password });

// const getUserByEmail = async (email) => axios.get(`/${email}`);

const registerApi = async (name, email, password, role) => {
  const result = await apiTrybeer.post('/register', {
    name,
    email,
    password,
    role,
  });
  return result;
};

const getProducts = () =>
  apiTrybeer.get('/products', { headers: { authorization: getLS('user').token } });

export default {
  loginApi,
  registerApi,
  // getUserByEmail,
  getProducts,
};

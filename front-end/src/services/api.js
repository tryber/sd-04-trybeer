import axios from 'axios';

const apiTrybeer = axios.create({
  baseURL: 'http://localhost:3001',
});

const loginApi = async (email, password) => {
  const result = await apiTrybeer.post('/login', { email, password });

  return result;
};

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

const getProducts = (token) => apiTrybeer.get('/products', { headers: { authorization: token } });

const getOrders = (token) => apiTrybeer.get('/orders', { headers: { authorization: token } });

export default {
  loginApi,
  registerApi,
  // getUserByEmail,
  getProducts,
  getOrders,
};

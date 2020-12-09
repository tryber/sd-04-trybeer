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

const getSalesProducts = (token, saleId) => apiTrybeer.get(
  `/sales/${saleId}`, { headers: { authorization: token } },
);

const setSalesProducts = (token, salesPdts) => apiTrybeer.post(
  '/products', { salesPdts }, { headers: { authorization: token } },
);

const userNameUpdateApi = async (name, email, newName) => {
  const result = await apiTrybeer.put('/profile', {
    name,
    email,
    newName,
  });

  return result;
};

const getOrders = (token) => apiTrybeer.get('/orders', { headers: { authorization: token } });

const getAllOrders = (token) => apiTrybeer.get('/admin/orders', { headers: { authorization: token } });

const setOrder = (token, order) => apiTrybeer.post(
  '/orders', { order }, { headers: { authorization: token } },
);

const getOrderById = (token, id) => apiTrybeer.get(
  `orders/${id}`, { headers: { authorization: token } },
);

export default {
  loginApi,
  registerApi,
  // getUserByEmail,
  getProducts,
  getSalesProducts,
  setSalesProducts,
  userNameUpdateApi,
  getOrders,
  setOrder,
  getOrderById,
  getAllOrders,
};

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const sendOrder = (email, total, address, number, cart) => api.post('/checkout', {
  email,
  total,
  address,
  number,
  cart
});
const getOrderById = (id) => (api.get(`/orders/${id}`));

export default {
  sendOrder,
  getOrderById,
};

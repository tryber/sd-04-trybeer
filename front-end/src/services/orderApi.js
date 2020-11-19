import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const sendOrder = (email, total, address, number) => api.post('/order', {
  email,
  total,
  address,
  number,
});

export default {
  sendOrder,
};

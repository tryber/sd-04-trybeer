import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const getProducts = () => (api.get('/products'));

export default {
  getProducts,
};

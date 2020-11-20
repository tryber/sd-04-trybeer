import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const getSaleById = (id) => (api.get(`/orders/${id}`));

export default {
  getSaleById,
}
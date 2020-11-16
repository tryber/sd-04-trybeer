const axios = require('axios');

const api = axios.create({
  baseURL: 'http//localhost:3001',
});

const listProducts = () => (api.get('/products'));

export default { listProducts };

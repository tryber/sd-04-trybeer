import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

const updateUser = (name, email) => (api.put('/user/update', { name, email }));

export default {
  updateUser,
};
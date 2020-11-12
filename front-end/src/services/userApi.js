import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const login = (email, password) => api.post('/login', { email, password });

const profile = (email) => api.post('/profile', { email });

const changeProfile = (id, name) => api.put('/profile', { id, name });

export default {
  login,
  profile,
  changeProfile,
};

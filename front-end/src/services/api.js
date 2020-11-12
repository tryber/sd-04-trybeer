import axios from 'axios';

const apiTrybeer = axios.create({
  baseURL: 'http://localhost:3001',
});

const loginApi = async (email, password) => await apiTrybeer.post('/login', { email, password });

const registerApi = async (name, email, password, role) => (
  await apiTrybeer.post('/register', { name, email, password, role }));

// const getUserByEmail = async (email) => axios.get(`/${email}`);

export default { loginApi, registerApi };

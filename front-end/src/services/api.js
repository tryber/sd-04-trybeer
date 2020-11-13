import axios from 'axios';

const apiTrybeer = axios.create({
  baseURL: 'http://localhost:3001',
});
const loginApi = async (email, password) => apiTrybeer.post('/login', { email, password });
const registerApi = async (name, email, password, role) => (
  apiTrybeer.post('/register',
    { name, email, password, role
    }));

export default { loginApi, registerApi };

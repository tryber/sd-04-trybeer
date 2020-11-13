import axios from 'axios';

<<<<<<< HEAD
const apiTrybeer = axios.create({
  baseURL: 'http://localhost:3001',
});
const loginApi = async (email, password) => apiTrybeer.post('/login', { email, password });

const registerApi = async (name, email, password, role) => {
  const result = await apiTrybeer.post('/register', {
    name, email, password, role,
  });
  return result;
};

export default { loginApi, registerApi };
=======
const loginApi = async (email, password) => {
  return axios.post('http://localhost:3001/login', { email, password });
};

const getUserByEmail = async (email) => axios.get(`/${email}`);

export default { loginApi, getUserByEmail };
>>>>>>> userProfile

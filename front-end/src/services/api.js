import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

//método post para que as info sejam passados como json
const headers = {
  'Content-Type': 'application/json',
};

const RegisterUserAPI = async(name, email, password, role) => {
  try{
    const result = await api.post('/register', { name, email, password, role},  headers)
    return result;
  }catch(err) {
    return err.response
  }
};

const getEmail = async() => await api.get('/register');


const login = (email, password) => api.post('/login', { email, password });

export default {
  RegisterUserAPI,
  login,
  getEmail,
};

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// método post para que as info sejam passados como json
const headers = {
  'Content-Type': 'application/json',
};

const registerUserAPI = async (name, email, password, role) => {
  try {
    const result = await api.post(
      '/register',
      {
        name,
        email,
        password,
        role,
      },
      headers,
    );
    return result;
  } catch (err) {
    return err.response;
  }
};

const loginAPI = (email, password) => api.post('/login', { email, password });

const productsAPI = async () => {
  try {
    const { data } = await api.get('/products');
    return data;
  } catch (err) {
    console.error('productsAPI', err)
  }
}

export default {
  registerUserAPI,
  loginAPI,
  productsAPI,
};

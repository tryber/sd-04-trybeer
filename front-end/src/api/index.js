import axios from 'axios';

const url = 'http://localhost:3001';
const mockUserUrl = 'https://my-json-server.typicode.com/pedrotpo/trybeer-mockapi/users/2';

export const userLogin = async (email, password) => axios
  .post(`${url}/login`, { email, password })
  .catch(({ response }) => response);

export const mockUserLogin = async () => axios
  .get(mockUserUrl)
  .catch(({ response }) => response);

export const postRegister = async (name, email, password, role) => axios
  .post(`${url}/register`, {
    name,
    email,
    password,
    role,
  })
  .catch(({ response }) => response);

const api = axios.create({
  baseURL: 'http//localhost:3001',
});

export const listProducts = () => (api.get('/products'));

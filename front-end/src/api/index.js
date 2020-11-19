import axios from 'axios';

const url = 'http://localhost:3001';

export const userLogin = async (email, password) => axios
  .post(`${url}/login`, { email, password })
  .catch(({ response }) => response);

export const postRegister = async (signName, signEmail, signPassword, signRole) => axios
  .post(`${url}/register`, {
    signName,
    signEmail,
    signPassword,
    signRole,
  })
  .catch(({ response }) => response);

export const listProducts = async () => axios
  .get(`${url}/products`)
  .catch(({ response }) => response);

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

// Pega os pedidos do banco de dados
// export const getOrders = async () => axios
//   .get(`${url}/orders`)
//   .catch(({ response }) => response);
const mockSales = 'https://my-json-server.typicode.com/josiasviveiro/trybeer-mockapi/sales';

export const getOrders = async () => axios
  .get(mockSales)
  .catch(({ response }) => response);

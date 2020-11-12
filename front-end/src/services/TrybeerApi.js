import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const postLogin = async (email, password) => axios.post(`${baseUrl}/login`, { email, password });

export const putUpdate = async (name, email) => axios.put(`${baseUrl}/profile`, { name, email });

export const postRegister = async (name, email, password, role) => {
  const dataResponse = await axios({
    baseURL: `${baseUrl}/register`,
    method: 'post',
    data: {
      name,
      email,
      password,
      role,
    },
  })
    .then((resp) => resp.data)
    .catch(({ response }) => response.data);

  return dataResponse;
};

export const getProducts = async () => axios.get(`${baseUrl}/products`);

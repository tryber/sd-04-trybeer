import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const postLogin = async (email, password) => axios.post('http://localhost:3001/login', { email, password });

export const placeholder = () => { };

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

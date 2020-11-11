import axios from 'axios';

const baseUrl = 'http://localhost:3001/';

export const postLogin = async (email, password) => axios.post('http://localhost:3001/login', { email, password });

export const placeholder = () => { };

export const requestApi = async (endpoint, method, data) => {
  const response = await axios({
    url: `${baseUrl}${endpoint}`,
    method,
    data,
  })
    .catch(({ err }) => console.log('Request failed:', err));
 return response;
};


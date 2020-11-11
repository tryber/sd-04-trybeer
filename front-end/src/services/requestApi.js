const axios = require('axios');

const baseUrl = 'http://localhost:3001/';

export const requestApi = async (endpoint, method, data) => {
  const response = await axios({
    url: `${baseUrl}${endpoint}`,
    method,
    data,
  })
    .catch(({ err }) => console.log('Request failed:', err));

  return response;
};

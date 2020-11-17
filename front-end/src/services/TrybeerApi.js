import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const postLogin = async (email, password) => axios.post(`${baseUrl}/login`, { email, password });

export const putUpdate = async (name, email) => axios.put(`${baseUrl}/profile`, { name, email });

export const postRegister = async (name, email, password, role) => axios
  .post(`${baseUrl}/register`, {
    name,
    email,
    password,
    role,
  })
  .catch(({ response }) => response);
  
export const getProducts = async () => axios.get(`${baseUrl}/products`);

export const postOrder = async (nameAdress, numberAdress, cart, user, totalPrice) => axios
  .post(`${baseUrl}/orders`, {
    nameAdress,
    numberAdress,
    cart,
    user,
    totalPrice,
  })
  .catch(({ response }) => response);

// export const postRegister = async (name, email, password, role) => {
//   const dataResponse = await axios({
//     baseURL: `${baseUrl}/register`,
//     method: 'post',
//     data: {
//       name,
//       email,
//       password,
//       role,
//     },
//   })
//     .then((resp) => resp.data)
//     .catch(({ response }) => response.data);

//   return dataResponse;
// };

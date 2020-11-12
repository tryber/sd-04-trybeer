import axios from 'axios';

//método post para que as info sejam passados como json
const headers = {
  'Content-Type': 'application/json',
};

const RegisterUserAPI = (name, email, password, role) => axios.post('http://localhost:3001/register',
  {
    name,
    email,
    password,
    role,
  },
  headers)
  .then((res) => res)
  .catch((error) => error);

export default RegisterUserAPI;

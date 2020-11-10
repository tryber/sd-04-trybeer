import axios from 'axios';

export const postLogin = async (email, password) => axios.post('http://localhost:3001/login', { email, password });

export const placeholder = () => { };

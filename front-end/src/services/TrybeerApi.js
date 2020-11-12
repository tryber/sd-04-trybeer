import axios from 'axios';

export const postLogin = async (email, password) => axios.post('http://localhost:3001/login', { email, password });

export const putUpdate = async (name, email) => axios.put('http://localhost:3001/profile', { name, email });

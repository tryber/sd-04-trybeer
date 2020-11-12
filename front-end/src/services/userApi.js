import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const login = (email, password) => api.post("/login", { email, password });
const register = (name, email, password, role) =>
  api.post("/register", { name, email, password, role });

export default {
  login,
  register,
};

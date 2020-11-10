import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState(null);

  const [admin, setAdmin] = useState(false);
  const [client, setClient] = useState(false);

  const [token, setToken] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const validEmail = (email) =>
    /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i.test(email);

  const createToken = () =>
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => setToken(res.data.token))
      .catch((error) => console.log(error));

  // if (admin) return <Redirect to="/admin/orders" />;
  // if (client) return <Redirect to="/products" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (item) => item.email === email && item.password === password
    );

    const { name, role } = user;

    createToken();

    if (token !== "") {
      const objUser = { name, email, token, role };
      localStorage.setItem("user", JSON.stringify(objUser));
    }

    role === "administrator" ? setAdmin(true) : setClient(true);
  };

  return (
    <div>
      <label htmlFor="email">Email</label>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          name="email"
          id="email"
          data-testid="email-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          data-testid="password-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          data-testid="signin-btn"
          disabled={!validEmail(email) || password.length < 6}
        >
          ENTRAR
        </button>
      </form>
      <Link to="/register">
        <button type="button" data-testid="no-account-btn">
          Ainda não tenho conta
        </button>
      </Link>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import api from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminUser, setAdminUser] = useState(false);
  const [clientUser, setClientUser] = useState(false);

  const validateEmail = (email) =>
    email.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/i);

  const validatePassword = (password) => password.length >= 6;

  const login = async (event) => {
    event.preventDefault();
    await api
      .post('/login', {
        email,
        password,
      })
      .then((response) => {
        const { token, user } = response.data;
        const { name, email, role } = user;
        const userData = { name, email, token, role };
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(userData));
        return user.role === 'administrator'
          ? setAdminUser(true)
          : setClientUser(true);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div className="container">
        <form onSubmit={(event) => login(event)}>
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            id="email"
            data-testid="email-input"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="email">Password</label>
          <input
            className="form-control"
            data-testid="password-input"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            type="submit"
            disabled={!(validateEmail(email) && validatePassword(password))}
            data-testid="signin-btn"
            className="btn btn-success"
          >
            ENTRAR
          </button>
        </form>
        <br />

        <Link to="/register">
          <button
            className="btn btn-primary"
            type="button"
            data-testid="no-account-btn"
            onClick={() => <Redirect to="/register" />}
          >
            Ainda não tenho conta
          </button>
        </Link>
      </div>

      {adminUser && <Redirect to="/admin/orders" />}
      {clientUser && <Redirect to="/products" />}
    </div>
  );
}

export default Login;

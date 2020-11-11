import React, { useState } from 'react';
import api from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => email.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/i);

  const validatePassword = (password) => password.match(/[a-zA-Z0-9]/);

  const login = async (event) => {
    event.preventDefault();
    await api.post('/login', {
      email,
      password
    }).then(data => console.log(data))
    .catch(e => console.log(e));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <form onSubmit={(event) => login(event)}>
          <input
            data-testid="email-input"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            data-testid="password-input"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={!(validateEmail(email) && validatePassword(password))}
            data-testid="signin-btn"
          >
            Entrar
          </button>

        </form>
        <button
          type="button"
          data-testid="no-account-btn"
        >Ainda não tenho conta</button>
      </div>
      {password}
    </div>
  )
};

export default Login;

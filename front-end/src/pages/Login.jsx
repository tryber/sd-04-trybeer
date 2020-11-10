import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => email.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/i);

  const validatePassword = (password) => password.match(/^[0-9]{5,}[0-9]$/);

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <form method="POST" action="">
          <input
            data-testid="email-input"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            data-testid="password-input"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
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

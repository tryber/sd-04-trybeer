import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validEmail = (email) =>
    /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i.test(email);

  // localStorage.setItem(user, object)

  // req.body = {email: '', password: ''}

  return (
    <div>
      <label htmlFor="email">Email</label>
      <form action="/" method="POST">
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
      <button type="button" data-testid="no-account-btn">
        Ainda não tenho conta
      </button>
    </div>
  );
};

export default Login;

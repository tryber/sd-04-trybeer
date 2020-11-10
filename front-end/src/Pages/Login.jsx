import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <div>
        <form method="POST" action="/login">
          <label htmlFor="email" />
          Email:
          <input name="email" type="email" data-testid="email-input" />
          <label htmlFor="password" />
          Senha:
          <input name="password" type="password" data-testid="password-input" />
          <button data-testid="signin-btn" type="submit">
            Entrar
          </button>
          <a href="" data-testid="no-account-btn">
            Ainda nao tenho conta
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;

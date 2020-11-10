import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="email" />
        Email:
        <input name="email" type="email" />
        <label htmlFor="password" />
        Senha:
        <input name="password" type="password" />
      </div>
    </div>
  );
};

export default Login;

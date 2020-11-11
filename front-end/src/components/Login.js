import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <form>
        <label htmlFor="emailInput">Email</label>
        <input type="text" id="emailInput" name="email" data-testid="email-input" />
        <label htmlFor="passwordInput">Senha</label>
        <input type="password" id="passwordInput" name="password" data-testid="password-input" />
        <button type="submit" data-testid="signin-btn">Entrar</button>
        <Link to="/" data-testid="no-account-btn">Ainda nao tenho conta</Link>
      </form>
    </div>
  )
}

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../../assets/user.png';
import './style.css';

const Login = () => {
  return (
    <div className="main-container-form">
      <img src={userIcon} alt="Login" />
      <form>
        <label htmlFor="emailInput">Email</label>
        <input type="text" id="emailInput" name="email" data-testid="email-input" />
        <label htmlFor="passwordInput">Senha</label>
        <input type="password" id="passwordInput" name="password" data-testid="password-input" />
        <div className="buttons">
          <button type="submit" data-testid="signin-btn">
            Entrar
          </button>
        </div>
      </form>
      <Link to="/" data-testid="no-account-btn">
        Ainda nao tenho conta
      </Link>
    </div>
  );
};

export default Login;

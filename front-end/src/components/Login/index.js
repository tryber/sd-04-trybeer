import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import userIcon from '../../assets/user.png';

import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="main-container-form">
      <img src={ userIcon } alt="Login" />
      <form>
        <label htmlFor="emailInput">Email</label>
        <input
          type="text"
          id="emailInput"
          name="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          data-testid="email-input"
        />

        <label htmlFor="passwordInput">Senha</label>
        <input
          type="password"
          id="passwordInput"
          name="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          data-testid="password-input"
        />

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

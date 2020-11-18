import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { EMAIL_PATTERN, PASS_LENGTH } from '../../validation';

import userIcon from '../../assets/user.png';

import './style.css';

const checkEmail = (email) => EMAIL_PATTERN.test(email);
const checkPass = (password) => password !== ' ' && password.length >= PASS_LENGTH;

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-container-form">
      <img src={ userIcon } alt="Login" />
      <form onSubmit={ handleSubmit }>
        <label htmlFor="emailInput">Email</label>
        <input
          type="text"
          id="emailInput"
          onChange={ (e) => setEmail(e.target.value) }
          data-testid="email-input"
        />

        <label htmlFor="passwordInput">Password</label>
        <input
          type="password"
          id="passwordInput"
          onChange={ (e) => setPassword(e.target.value) }
          data-testid="password-input"
        />

        <div className="buttons">
          <button
            type="submit"
            data-testid="signin-btn"
            disabled={ !checkEmail(email) || !checkPass(password) }
          >
            ENTRAR
          </button>
        </div>
      </form>
      <Link to="/register" data-testid="no-account-btn">
        Ainda não tenho conta
      </Link>
    </div>
  );
};

export default Login;

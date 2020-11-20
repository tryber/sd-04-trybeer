import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { registerValidation } from '../../validation';
import api from '../../services/api';

import TrybeerLogo from '../../imgs/logo.png';

import './styles.css';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [password, setPassword] = useState('');
  const [isSeller, setIsSeller] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/register', {
        userName,
        emailUser,
        password,
        isSeller,
      });
    } catch (error) {
      // alert(error.message);
      // throw new Error();
    }
  };

  const ableRegisterButton = () => (
    <div className="btn-div">
      <Link to="/">
        <button
          data-testid="signup-btn"
          type="button"
          className="btn-cadastrar"
          disabled={ registerValidation(userName, emailUser, password) }
          onClick={ handleSubmit }
        >
          Cadastrar
        </button>
      </Link>
    </div>
  );

  return (
    <article className="page-registro">
      <img src={ TrybeerLogo } alt="Trybeer logo developed by Luma Arruda" className="logo-trybeer" />

      <form className="form-registro">
        <label className="input-labels" htmlFor="input-name">
          Nome
          <input
            id="input-name"
            onChange={ (e) => setUserName(e.target.value) }
            type="text"
            data-testid="signup-name"
            className="input-registro"
            minLength="12"
            title="Nome com no mínimo 12 caracteres sem números ou caracteres especiais"
            required
          />
        </label>

        <label className="input-labels" htmlFor="input-email">
          Email
          <input
            id="input-email"
            type="email"
            onChange={ (e) => setEmailUser(e.target.value) }
            data-testid="signup-email"
            className="input-registro"
            title="Endereço de e-mail inválido, formato recomendado <nome>@<domínio>"
            required
          />
        </label>

        <label className="input-labels" htmlFor="input-password">
          Password
          <input
            onChange={ (e) => setPassword(e.target.value) }
            type="password"
            id="input-password"
            data-testid="signup-password"
            className="input-registro"
            minLength="6"
            // pattern="[0-9]*"
            title="Sua senha deve ter no mínimo 6 caracteres, sendo TODOS numéricos."
            inputMode="numeric"
            required
          />
        </label>

        <div className="seller-checkbox-div">
          <label htmlFor="CheckSalesman">
            <span className="checkbox-text">
              <input
                type="checkbox"
                onChange={ () => setIsSeller(!isSeller) }
                data-testid="signup-seller"
                className="seller-checkbox"
                value={ isSeller }
              />
              Quero Vender
            </span>
          </label>
        </div>

        {ableRegisterButton()}

      </form>
    </article>
  );
};

export default Register;

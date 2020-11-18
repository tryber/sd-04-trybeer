import React, { /* useContext */ useState } from 'react';
import { Link } from 'react-router-dom';

// import { Context } from '../../context/index';
import { EMAIL_PATTERN, NAME_PATTERN } from '../../validation';
import api from '../../services/api';

import TrybeerLogo from '../../imgs/logo.png';

import './styles.css';

const Register = () => {
  // const {
  //   userName,
  //   setUserName,
  //   emailUser,
  //   setEmailUser,
  //   password,
  //   setPassword,
  //   setIsSeller,
  //   isSeller,
  // } = useContext(Context);
  // const [isDisabled, setIsDisabled] = useState(true);
  const [userName, setUserName] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [password, setPassword] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  // const namePattern = /[a-zA-Z ]{12,}/;
  // const emailPattern = /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i;

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

  const ableRegisterButton = () => {
    let disabled = true;
    if (EMAIL_PATTERN.test(emailUser) && NAME_PATTERN.test(userName)) {
      disabled = false;
    }

    return (
      <div className="btn-div">
        <Link to="/">
          <button
            data-testid="signup-btn"
            type="button"
            className="btn-cadastrar"
            disabled={ disabled }
            onClick={ handleSubmit }
          >
            CADASTRAR
          </button>
        </Link>
      </div>
    );
  };

  return (
    <article className="page-registro">
      <img src={ TrybeerLogo } alt="Trybeer logo developed by Luma Arruda" className="logo-trybeer" />

      <form className="form-registro">
        <label className="input-labels" htmlFor="input-name">Nome</label>
        <input
          id="input-name"
          onChange={ (e) => setUserName(e.target.value) }
          value={ userName }
          type="text"
          data-testid="signup-name"
          className="input-registro"
          minLength="12"
          // pattern="[A-zA-z\s]{12,}"
          title="Nome com no mínimo 12 caracteres sem números ou caracteres especiais"
          required
        />

        <label className="input-labels" htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="email"
          onChange={ (e) => setEmailUser(e.target.value) }
          value={ emailUser }
          data-testid="signup-email"
          className="input-registro"
          // pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Endereço de e-mail inválido, formato recomendado <nome>@<domínio>"
          required
        />

        <label className="input-labels" htmlFor="input-password">Senha</label>
        <input
          onChange={ (e) => setPassword(e.target.value) }
          name={ password }
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

        <div className="seller-checkbox-div">
          <input
            type="checkbox"
            onChange={ () => setIsSeller(!isSeller) }
            data-testid="signup-seller"
            className="seller-checkbox"
            value={ isSeller }
          />
          <span className="checkbox-text">
            <label htmlFor="CheckSalesman">Quero vender</label>
          </span>
        </div>

        {ableRegisterButton()}

      </form>
    </article>
  );
};

export default Register;

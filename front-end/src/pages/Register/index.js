import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/index';
import TrybeerLogo from '../../imgs/logo.png';
import './styles.css';


const Register = () => {
  const { userName, setUserName, emailUser, setEmailUser, setPassword, setIsSeller, isSeller } = useContext(Context);

  const namePattern = "[a-zA-Z ]{12,}";
  const emailPattern = "[^@]+@[^@]+.[^@]+";
  const nameRegex = new RegExp(namePattern);
  const emailRegex = new RegExp(emailPattern);

  const ableRegisterButton = () => {
    let disabled = true;
    if (emailRegex.test(emailUser) && nameRegex.test(userName)) {
      disabled = false;
    }
    return (
      <div className="btn-div">
        <Link to="/">
          <button
            data-testid="signup-btn"
            type="submit"
            className="btn-cadastrar"
            disabled={disabled}
          >
            CADASTRAR
              </button>
        </Link>
      </div>
    );
  };

  return (
    <article className="page-registro">
      <img src={TrybeerLogo} alt="Trybeer logo developed by Luma Arruda" className="logo-trybeer" />

      <form action="/register" method="POST" className="form-registro">
        <label className="input-labels" htmlFor="input-name">Nome</label>
        <input
          id="input-name"
          onChange={({ target }) => setUserName(target.value)}
          type="text"
          data-testid="signup-name"
          name="name"
          className="input-registro"
          minLength="12"
          pattern="[A-zA-z\s]{12,}"
          title="Nome com no mínimo 12 caracteres sem números ou caracteres especiais"
          required
        />

        <label className="input-labels" htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="email"
          onChange={({ target }) => setEmailUser(target.value)}
          data-testid="signup-email"
          name="email"
          className="input-registro"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Endereço de e-mail inválido, formato recomendado <nome>@<domínio>"
          required
        />

        <label className="input-labels" htmlFor="input-password">Senha</label>
        <input
          onChange={({ target }) => setPassword(target.value)}
          type="password"
          id="input-password"
          data-testid="signup-password"
          name="password"
          className="input-registro"
          minLength="6"
          pattern="[0-9]*"
          title="Sua senha deve ter no mínimo 6 caracteres, sendo TODOS numéricos."
          inputMode="numeric"
          required
        />

        <div className="seller-checkbox-div">
          <input
            type="checkbox"
            onChange={() => setIsSeller(true)}
            data-testid="signup-seller"
            className="seller-checkbox"
            value={!isSeller}
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

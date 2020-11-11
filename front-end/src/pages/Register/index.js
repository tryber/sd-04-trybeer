import React, { useContext } from 'react';
import { Context } from '../../context/index';
import TrybeerLogo from '../../imgs/logo.png';
import './styles.css';

const Register = () => {
  const { setUserName, setEmailUser, setPassword, setIsSeller, isSeller } = useContext(Context);

  return (
    <article className="page-registro">
      <img src={TrybeerLogo} alt="Trybeer logo developed by Luma Arruda" className="logo-trybeer" />

      <form className="form-registro">
        <label className="input-labels" htmlFor="input-name">Nome</label>
        <input
          id="input-name"
          onChange={({ target }) => setUserName(target.value)}
          type="text"
          data-testid="signup-name"
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
          className="input-registro"
          minLength="6"
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

        <button
          data-testid="signup-btn"
          type="submit"
          className="btn-cadastrar"
        >
          CADASTRAR
      </button>
      </form>
    </article>
  );
};

export default Register;

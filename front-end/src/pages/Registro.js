import React, { useContext } from 'react';
import { Context } from '../context/index';
import SellerCheckbox from '../components/SellerCheckbox';
import TrybeerLogo from '../imgs/logo.png';
import './Registro.css';

const Registro = () => {
  const { setUserName, setEmailUser, setPassword } = useContext(Context);

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
      />
      
      <label className="input-labels" htmlFor="input-email">Email</label>
      <input
        id="input-email"
        type="email"
        onChange={({ target }) => setEmailUser(target.value)}
        data-testid="signup-email"
        className="input-registro"
      />
      
      <label className="input-labels" htmlFor="input-password">Senha</label>
      <input
        onChange={({ target }) => setPassword(target.value)}
        type="password"
        id="input-password"
        data-testid="signup-password"
        className="input-registro"
      />
      
      <SellerCheckbox />
      
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

export default Registro;

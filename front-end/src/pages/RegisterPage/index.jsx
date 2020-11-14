import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { setLS } from '../../utils'
import './index.css';


const createUserAPI = async (name, email, password, role) => {
  return await api.registerUserAPI(name, email, password, role)
    .then((data) =>  data)
    .catch((error) => error);
};

const Register = () => {
  const [ state, setState ] = useState(
    {
    name: '',
    email: '',
    password: '',
    role:'cliente',
    box: false,
    erro: null,
  });

  const { name, email, password, role, box, erro } = state;

  const checkName = (nome) => nome.match(/^([a-zA-Z\s]){12,100}$/);
  const checkEmail = (mail) => mail.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  const checkSenha = (senha) => senha.length >= 6;

  const handleName = (nome) => setState({ ...state, name: nome });
  const handleEmail = (carta) => setState({ ...state, email: carta });
  const handlePassword = (valor) => setState({ ...state, password: valor });
  const handleBox = () => setState({ ...state, box: true});

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const createUser = await createUserAPI( name, email, password, role );
      const apiResponse = await createUser;

      if(apiResponse.status === 403) {
        return setState({ ...state, erro: apiResponse.data.message });
      }

      setLS('user', apiResponse.data);
      return history.push( box ? '/admin/orders' : '/products');
    } catch (err) {
      console.error(err)
    }
  };

  return(
    <div>
      <div className="page-register">
        <form className="form-register" method="POST" onSubmit={handleSubmit}>
          <label className="nome" htmlFor="name">
            Nome
          </label>
          <input
            className="nome-imput"
            data-testid="signup-name"
            type="text"
            name="name"
            id="name"
            minLength={ 12 }
            maxLength={ 100 }
            onChange={(e) => handleName(e.target.value)}
            value={ name }
            required
          />
          <label className="email">
            Email
          </label>
          <input
            className="email-imput"
            data-testid="signup-email"
            type="email"
            name="email"
            id="email"
            onChange={(e) => handleEmail(e.target.value)}
            value={email}
            required
          />
          <label className="senha" htmlFor="password">
            Password
          </label>
          <input
            className="senha-input"
            data-testid="signup-password"
            type="password"
            name="password"
            id="password"
            onChange={(e) => handlePassword(e.target.value)}
            value={password}
            required
          />
          <input
            className="box-in"
            data-testid="signup-seller"
            type="checkbox"
            name="seller"
            id="seller"
            onChange={(e) => handleBox(e.target.checked)}
            value={box}
          />
          <label className="quero-vender">
            Quero Vender
          </label>
            {erro && <span>{erro}</span>}
          <input
            className="cadastrar-input"
            type="submit"
            value="Cadastrar"
            disabled={!(checkEmail(email) && checkName(name) && checkSenha(password))}
            data-testid="signup-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;

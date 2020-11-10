import React, { useState } from "react";


const RegisterPage = () => {
  const [ state, setState ] = useState (
    {
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = state;

  const checkName = (nome) => nome.match(/^[a-zA-Z\s]+$/);
  const checkEmail = (mail) => mail.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  const checkSenha = (senha) => senha.length > 6;

  const handleName = (nome) => setState({ ...state, name: nome });
  const handleEmail = (carta) => setState({ ...state, email: carta });
  const handlePassword = (valor) => setState({ ...state, password: valor });
  
  return(
    <div>
      <h1>Registro</h1>
      <div>
        <form method="POST">
          <div>
            <label htmlFor="name">
              Nome
              <input
                data-testid="signup-name"
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                minLength={ 12 }
                maxLength={ 100 }
                onChange={(e) => handleName(e.target.value)}
                value={ name }
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email
              <input
                data-testid="signup-email"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail válido"
                onChange={(e) => handleEmail(e.target.value)}
                value={email}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password
              <input
                data-testid="signup-password"
                type="password"
                name="password"
                id="password"
                placeholder="Escolha uma senha"
                onChange={(e) => handlePassword(e.target.value)}
                value={password}
                required
              />
            </label>
          </div>
          <div>
            <label>
              <input
                data-testid="signup-seller"
                type="checkbox"
                name="queroVender"
                id="queroVender"
                // onChange={(e) => setQueroVender(e.target.checked)}
                // value={queroVender}
              />
              Quero Vender
            </label>
          </div>
          <input
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

export default RegisterPage;

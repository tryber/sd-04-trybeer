import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { TrybeerContext } from '../context';
import { loginApi } from '../services/api';

const Login = () => {
  useEffect(() => {
    console.log('Hello World');
  }, []);

  // const { user, setUser } = useContext(TrybeerContext);

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  //  VALIDAÇÃO DE EMAIL
  const isEmailValid = (email = '') => email.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/i);

  const emailValideted = () => {
    if (!email || !isEmailValid(email) || email.length < 6) return false;
    return true;
  };

  // VARIÁVEL QUE DEFINE O "ESTADO" DO BOTÃO
  const disableButton = !password || password.length < 6 || !emailValideted();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = await loginApi(email, password);
    console.log('linha 29, api:', api);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="m-3">
      <section className="card w-75 mx-auto m-3">
        <div className="form-group w-75 mx-auto m-2">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email-input"
            type="text"
            name="email"
            id="email"
            required
            className="form-control"
          />
        </div>

        <div className="form-group w-75 mx-auto m-2">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password-input"
            type="password"
            name="password"
            id="password"
            minLength="6"
            required
            className="form-control"
          />
        </div>

        <div className="mx-auto m-2">
          <button
            data-testid="signin-btn"
            type="submit"
            disabled={disableButton}
            className="btn btn-warning m-2"
          >
            ENTRAR
          </button>

          <Link data-testid="no-account-btn" to="/register" className="m-2">
            Ainda não tenho conta
          </Link>
        </div>
      </section>
    </form>
  );
};

export default Login;

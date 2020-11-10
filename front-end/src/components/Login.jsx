import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TrybeerContext } from '../context';

const Login = () => {
  const { user, setUser } = useContext(TrybeerContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (email = '') => email.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/i);

  const emailValideted = () => {
    if (!isEmailValid(email)) return true;
    return false;
  };

  const disableButton = !email || !password || password.length < 6 || emailValideted();

  return (
    <div>
      <h1>Login</h1>
      <form action="" method="POST">
        <label htmlFor="email">Email: </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          data-testid="email-input"
          type="text"
          name="email"
          id="email"
          pattern="^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$"
          required
        />

        <label htmlFor="password">Password: </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          data-testid="password-input"
          type="password"
          name="password"
          id="password"
          minLength="6"
          required
        />

        <button data-testid="signin-btn" type="submit" disabled={disableButton}>
          ENTRAR
        </button>

        <Link data-testid="no-account-btn" to="/register">
          Ainda não tenho conta
        </Link>
      </form>
    </div>
  );
};

export default Login;

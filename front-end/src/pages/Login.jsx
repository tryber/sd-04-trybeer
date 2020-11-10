import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { validateLogin } from '../services/validate';
import { postLogin } from '../services/TrybeerApi';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [canLogin, setCanLogin] = useState(false);
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data: { token, userData: { name, role } } } = await postLogin(email, password);
      localStorage.user = {
        name, email, token, role,
      };
      history.push(`/${role === 'client' ? 'products' : 'admin/orders'}`);
    } catch (err) {
      setMessage(err.message);
    }
  };

  const validate = (userEmail, userPassword) => {
    const { error } = validateLogin(userEmail, userPassword);
    if (error) return setMessage(error.message);
    return setCanLogin(true);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          name="email"
          value={ email }
          onChange={ ({ target: { value } }) => {
            setEmail(value);
            validate(value, password);
          } }
          data-testid="email-input"
          required
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ ({ target: { value } }) => {
            setPassword(value);
            validate(email, value);
          } }
          data-testid="password-input"
          required
        />
      </label>
      <button type="submit" data-testid="signin-btn" disabled={ !canLogin }>ENTRAR</button>
      <Link to="/register" data-testid="no-account-btn">Ainda não tenho conta</Link>
      <span>{message}</span>
    </form>
  );
}

export default Login;

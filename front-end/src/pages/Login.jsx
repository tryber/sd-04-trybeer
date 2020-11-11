import React, { useEffect, useReducer, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { validateLogin } from '../services/validate';
import { postLogin } from '../services/TrybeerApi';
import { DuffLogoTransparent } from '../images';
import '../css/loginPage.css';

function Login() {
  const history = useHistory();
  const [ message, setMessage ] = useState('');
  const [ canLogin, setCanLogin ] = useState(false);
  const [ form, setForm ] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { email: '', password: '' },
  );
  const { email, password } = form;

  const handleInput = ({ target: { name, value } }) => setForm({ [ name ]: value });

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

  useEffect(() => {
    const { error } = validateLogin(form.email, form.password);
    if (error) {
      setCanLogin(false);
      return setMessage(error.message)
    };
    setMessage();
    return setCanLogin(true);
  }, [ form ])

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <img src={DuffLogoTransparent} alt="Duff Logo" className="duff-logo" />
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">
            Email:
        <input
              type="text"
              name="email"
              value={email}
              onChange={handleInput}
              data-testid="email-input"
              required
            />
          </label>
          <label htmlFor="password">
            Password:
        <input
              type="password"
              name="password"
              value={password}
              onChange={handleInput}
              data-testid="password-input"
              required
            />
          </label>
          <button type="submit" data-testid="signin-btn" disabled={!canLogin}>ENTRAR</button>
          <Link to="/register" data-testid="no-account-btn">Ainda não tenho conta</Link>
          <span>{message}</span>
        </form>
      </div>
    </div>
  );
}

export default Login;

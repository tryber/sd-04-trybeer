import React from 'react'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { validateLogin } from '../services/validate';
import { postLogin } from '../services/TrybeerApi'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await postLogin(email, password);
    console.log(result); // salvar no local
    useHistory().push('/products');
  }

  const validate = (email, password) => {
    const { error } = validateLogin(email, password);
    if (error) return setMessage(error.message);
    setMessage(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email:
        <input type="text"
          name="email"
          value={email}
          onChange={({ target: { value } }) => {
            setEmail(value);
            validate(value, password);
          }}
          data-testid="email-input"
          required />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password"
          name="password"
          value={password}
          onChange={({ target: { value } }) => {
            setPassword(value);
            validate(email, value);
          }}
          data-testid="password-input"
          required />
      </label>
      <button type="submit" data-testid="signin-btn" disabled={message}>Login</button>
      <Link to='/register' data-testid="no-account-btn">Ainda não possuo conta</Link>
      <span>{message}</span>
    </form>
  )
}

export default Login

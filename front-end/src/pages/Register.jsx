import React, { useState } from 'react';
import { validateName, validateEmail, validatePassword } from '../utils/inputValidations';
import api from '../services/api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [message, setMessage] = useState('');

  // Conferir URL e metódo.
  const redirect = () => {
    if (checkbox) {
      return window.location.replace('http://localhost:3000/admin/orders');
    }
    return window.location.replace('http://localhost:3000/products');
  };

  const register = async (event) => {
    event.preventDefault();
    await api.post('/register', {
      name,
      email,
      password,
      checkbox,
    })
    .then(() => redirect())
    .catch((e) => setMessage(e.response.data.message));

    
  };

  return (
    <div>
      <h2>Register Page</h2>
      <form onSubmit={ (event) => register(event) }>
        <label htmlFor="name">Nome</label>
        <input
          data-testid="signup-name"
          placeholder="name"
          name="name"
          type="text"
          required
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />

        <label htmlFor="email">Email</label>
        <input
          data-testid="signup-email"
          name="email"
          placeholder="email"
          type="email"
          required
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />

        <label htmlFor="password">Password</label>
        <input
          data-testid="signup-password"
          name="password"
          placeholder="passwrod"
          type="password"
          required
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />

        <label htmlFor="checkbox">Quero Vender</label>
        <input
          data-testid="signup-seller"
          name="checkbox"
          type="checkbox"
          onChange={ (e) => setCheckbox(e.target.checked) }
        />
        
        <button
          type="submit"
          disabled={ !(validateName(name) && validateEmail(email) && validatePassword(password)) }
          data-testid="signup-btn"
        >
          Cadastrar
        </button>
      </form>
      {message}
    </div>
  );
}

export default Register;

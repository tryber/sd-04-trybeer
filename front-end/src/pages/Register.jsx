<<<<<<< HEAD
import React, { useState } from 'react';
import { validateName, validateEmail, validatePassword } from '../utils/inputValidations';
import api from '../services/api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  // Conferir URL e metódo.
  const redirect = () => {
    if (checkbox) {
      return window.location.replace('http://localhost:3000/admin/profile');
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
    }).then((data) => console.log(data))
      .catch((e) => console.log(e));

    redirect();
  };

  return (
    <div>
      <h2>Register Page</h2>
      <form onSubmit={ (event) => register(event) }>
        <input
          data-testid="signup-name"
          placeholder="name"
          name="name"
          type="text"
          required
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />

        <input
          data-testid="signup-email"
          name="email"
          placeholder="email"
          type="email"
          required
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />

        <input
          data-testid="signup-password"
          name="password"
          placeholder="passwrod"
          type="password"
          required
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />

        <label htmlFor="isSeller">
          Quero vender
          <input
            data-testid="signup-password"
            name="isSeller"
            type="checkbox"
            onChange={ (e) => setCheckbox(e.target.checked) }
          />
        </label>
        <button
          type="submit"
          disabled={ !(validateName(name) && validateEmail(email) && validatePassword(password)) }
          data-testid="signup-btn"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
=======
import React from 'react';

function Register() {
  return (
    <h2>Register Page</h2>
  )
};
>>>>>>> 4a5923e906e3f81c44bd157ce09b8915fa31b37d

export default Register;

import React, { useState } from 'react';
import { formValidate } from '../services/validate';
import { requestApi } from '../services/TrybeerApi';

const Register = () => {
  const [form, setForm] = useState({
    name: null,
    email: null,
    password: null,
    seller: false,
    error: null,
  });

  const { name, email, password, seller, error } = form;

  // const urlRedirect = () => {

  // }

  const postRegister = async (userData) => {
    const response = await requestApi('register', 'post', userData);
    console.log('response', response);
  }

  const isValidForm = async (param) => {
    const validation = formValidate(param);
    const { seller, error, ...userData } = param;
    console.log('userData', userData)
    validation === true ? setForm({ ...form, error: null }) : setForm({ ...form, error: validation })
    if (validation === true) {
      postRegister(userData)
      // requisição API
    };
  };

  const handleInputChange = (event) => {
    if(event === "seller") return setForm({ ...form, seller: !seller })
    const { name: inputName, value } = event.target;
    setForm({ ...form, [inputName]: value })
  };

  return (
      <form>
        <label htmlFor="userName">
          Nome
          <input
            type="text"
            name="name"
            id="userName"
            data-testid="signup-name"
            onChange={ (event) => handleInputChange(event) }
          />
        </label>
        <label htmlFor="userEmail">
          Email
          <input
            type="email"
            name="email"
            id="userEmail"
            data-testid="signup-email"
            onChange={ (event) => handleInputChange(event) }
          />
        </label>
        <label htmlFor="userPassword">
          Password
          <input
            className="input-register"
            type="password"
            name="password"
            id="userPassword"
            minLength="6"
            data-testid="signup-password"
            onChange={ (event) => handleInputChange(event) }
          />
        </label>
        <label htmlFor="userSeller">
        Quero Vender
          <input
          type="checkbox"
          name="seller"
          id="userSeller"
          data-testid="signup-seller"
          onChange={() => handleInputChange("seller") }
          />
        </label>
        <button
          onClick={() => isValidForm(form)}
          type="button"
          disabled={error && !name || !email || !password}
          data-testid="signup-btn"
        >
        Cadastrar
        </button>
        {error && <span>{error}</span>}
      </form>
  );
};

export default Register;

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { formValidate } from '../services/validate';
import { postRegister } from '../services/TrybeerApi';

const Register = () => {
  const [form, setForm] = useState({
    name: null,
    email: null,
    password: null,
    role: false,
    error: null,
    disableButton: false,
    redirect: null,
  });

  const { name, email, password, role, error, disableButton, redirect } = form;

  const requestApi = async (userData) => {
    const { name, email, password, role } = userData;
    const seller = role ? 'administrator' : 'client';
    const response = await postRegister(name, email, password, seller);
    response.err ? setForm({ ...form, error: response.err }) : setForm({ ...form, error: null })
    if (response.role) return (response.role === 'administrator' ? setForm({ ...form, redirect: 'administrator' }) : setForm({ ...form, redirect: 'client' }));
  }

  const isValidForm = async (param) => {
    const validation = formValidate(param);
    const { error, ...userData } = param;
    if (validation === true) {
      requestApi(userData)
    };
  };

  const handleInputChange = (event) => {
    if(event === "role") return setForm({ ...form, role: !role })
    const { name: inputName, value } = event.target;
    setForm({ ...form, [inputName]: value })
  };

  useEffect(() => {
    const validation = formValidate(form);
    validation === true ? setForm({ ...form, disableButton: false }) : setForm({ ...form, disableButton: true })
  }, [name, email, password, redirect]);

  if (redirect) return (redirect=== 'administrator' ? <Redirect to="/admin/orders" /> : <Redirect to="/products" />);
  
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
          name="role"
          id="userSeller"
          data-testid="signup-seller"
          onChange={() => handleInputChange("role") }
          />
        </label>
        <button
          onClick={() => isValidForm(form)}
          type="button"
          disabled={disableButton}
          data-testid="signup-btn"
        >
        Cadastrar
        </button>
        {error && <span>{error}</span>}
      </form>
  );
};

export default Register;

import React, { useRef, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import { Field, Label, Input, Button } from "rbx";

import api from '../services/userApi';

const ButtonEnviar = (isDisabled, validaLogin) => (
  <Button
    type="Button"
    data-testid="signin-btn"
    disabled={isDisabled}
    onClick={() => validaLogin()}
  >
    ENTRAR
  </Button>
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState('');

  const simpleValidator = useRef(new SimpleReactValidator());
  const { errorEmail, errorPassword } = simpleValidator.current.fields;

  const validaLogin = async () => {
    const response = await api.login(email, password);

    localStorage.setItem('user', JSON.stringify(response.data));
    if (response.data.role === 'administrator') {
      setRedirect('admin');
    } else setRedirect('client');
  };

  if (redirect === 'admin') return <Redirect to="/admin/orders" />;
  if (redirect === 'client') return <Redirect to="/products" />;

  return (
    <div>
      <h2>Login</h2>
      <form>
        <Field>
          <Label htmlFor="email">Email:</Label>
          <Input
            name="email"
            type="email"
            data-testid="email-input"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={simpleValidator.current.showMessageFor('errorEmail')}
          />
          {simpleValidator.current.message('errorEmail', email, 'required|email')}
        </Field>
        <Field>
          <Label htmlFor="password">Password:</Label>
          <Input
            name="password"
            type="password"
            data-testid="password-input"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={simpleValidator.current.showMessageFor('errorPassword')}
          />
          {simpleValidator.current.message('errorPassword', password, 'required|min:5')}
        </Field>
        {errorEmail && errorPassword
          ? ButtonEnviar(false, validaLogin)
          : ButtonEnviar(true, validaLogin)}
        <Link to="/register" data-testid="no-account-btn">
          Ainda não tenho conta
        </Link>
      </form>
    </div>
  );
};

export default Login;

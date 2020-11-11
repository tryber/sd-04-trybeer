import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import {
  Field,
  Label,
  Input,
} from 'rbx';

import ButtonEnviar from '../Components/buttonEnviar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const simpleValidator = useRef(new SimpleReactValidator());
  const { errorEmail, errorPassword } = simpleValidator.current.fields;

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
            onChange={ (e) => setEmail(e.target.value) }
            onBlur={ simpleValidator.current.showMessageFor('errorEmail') }
          />
          { simpleValidator.current.message('errorEmail', email, 'required|email') }
        </Field>
        <Field>
          <Label htmlFor="password">Password:</Label>
          <Input
            name="password"
            type="password"
            data-testid="password-input"
            onChange={ (e) => setPassword(e.target.value) }
            onBlur={ simpleValidator.current.showMessageFor('errorPassword') }
          />
          { simpleValidator.current.message('errorPassword', password, 'required|min:5') }
        </Field>
        { errorEmail && errorPassword
          ? <ButtonEnviar email={ email } password={ password } isDisabled={ false } />
          : <ButtonEnviar email={ email } password={ password } isDisabled={ true } /> }
        <Link to="/register" data-testid="no-account-btn">
          Ainda não tenho conta
        </Link>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import { userLogin } from '../../api';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInput = ({ target: { name, value } }) => {
    if (name === 'loginEmail') return setEmail(value);
    return setPassword(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await userLogin(email, password);
      console.log(document.cookies.data.token);
    } catch (err) {
      return null;
    }
    return null;
  };
  return (
    <div>
      <FormControl onSubmit={ handleLogin }>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          type="email"
          name="loginEmail"
          id="email"
          data-testid="email-input"
          onChange={ handleInput }
        />

        <FormLabel htmlFor="password">Senha</FormLabel>
        <Input
          type="password"
          name="loginPassword"
          id="password"
          data-testid="password-input"
          onChange={ handleInput }
        />

        <Button variantColor="green" type="submit" data-testid="signin-btn">
          Entrar
        </Button>
        <Button
          variantColor="blue"
          type="submit"
          data-testid="no-account-btn"
          onClick={ () => {
            history.push('/register');
          } }
        >
          Ainda não tenho conta
        </Button>
      </FormControl>
    </div>
  );
};

export default Login;

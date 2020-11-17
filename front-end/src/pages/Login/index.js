import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { userLogin /* mockUserLogin */ } from '../../api';
import validator from './validateLogin';

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
    /* mockAPI call
    const result = await mockUserLogin();
    console.log(email, password);
    const redirect = result.data.role === 'client' ? '/products' : '/admin/profile'; */
    const yupResults = await validator.isValid();
    const result = await userLogin(email, password);
    const redirect = result.role === 'client' ? '/products' : '/admin/profile';
    // history.push(redirect);
  };

  return (
    <div>
      <form onSubmit={ (e) => handleLogin(e) }>
        <FormControl id="email" isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            name="loginEmail"
            data-testid="email-input"
            onChange={ handleInput }
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel htmlFor="password">Senha</FormLabel>
          <Input
            type="password"
            name="loginPassword"
            data-testid="password-input"
            onChange={ handleInput }
          />
        </FormControl>
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
      </form>
    </div>
  );
};

export default Login;

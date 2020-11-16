import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  Input,
} from '@chakra-ui/react';

const Login = () => {
  const history = useHistory();
  return (
    <div>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          type="email"
          name="signEmail"
          id="email"
          data-testid="email-input"
        />

        <FormLabel htmlFor="password">Senha</FormLabel>
        <Input
          type="password"
          name="signPassword"
          id="password"
          data-testid="password-input"
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

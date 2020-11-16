import React from 'react';

import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  Input,
} from '@chakra-ui/core';

const validator = require('./validateRegister');

const Register = () => (
  <div>
    <FormControl>
    <form method="POST">
      <FormLabel htmlFor="name">Nome</FormLabel>
      <Input type="text" name="signName" id="name" data-testid="signup-name" />

      <FormLabel htmlFor="email">Email</FormLabel>
      <Input type="email" name="signEmail" id="email" data-testid="signup-email" />

      <FormLabel htmlFor="password">Senha</FormLabel>
      <Input type="password" name="signPassword" id="password" data-testid="signup-password" />

      <Checkbox variantColor="green" data-testid="signup-seller">Quero vender</Checkbox>

      <Button variantColor="green" type="submit" data-testid="signup-btn">Cadastrar</Button>
      </form>
    </FormControl>
  </div>
);

export default Register;

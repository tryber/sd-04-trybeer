import React, { useEffect, useState } from 'react';

import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  Input,
} from '@chakra-ui/core';

const validator = require('./validateRegister');

function Register() {
  const [signName, setSignName] = useState('');
  const [signEmail, setSignEmail] = useState('');
  const [signPassword, setSignPassword] = useState('');

  // Faz as validações dos campos do formulário 
  const handleFormField = (fieldName ,formField) => {
    validator.schema.fields[`${fieldName}`].validate(formField)
    .then((valid) => {
      console.log('Validação: ', valid);
      return valid; 
    })
    .catch((err) => {
      console.log('Erro de validação: ', err);
      console.log('ERRORS: ', err.errors[0]);
      return err.errors[0];
    });
  };

  // Roda toda vez que os valores dos campos são alterados
  useEffect(() => {
    handleFormField('signName', signName);
    handleFormField('signEmail', signEmail);
    handleFormField('signPassword', signPassword);

  }, [signName, signEmail, signPassword]);

  return (
  <div>
    <FormControl>
      <form method="POST">
        <FormLabel htmlFor="name">Nome</FormLabel>
        <Input type="text" name="signName" id="name" data-testid="signup-name" onChange={(e) => setSignName(e.target.value)}/>

        <FormLabel htmlFor="email">Email</FormLabel>
        <Input type="email" name="signEmail" id="email" data-testid="signup-email" onChange={(e) => setSignEmail(e.target.value)}/>

        <FormLabel htmlFor="password">Senha</FormLabel>
        <Input type="password" name="signPassword" id="password" data-testid="signup-password" onChange={(e) => setSignPassword(e.target.value)}/>

        <Checkbox variantColor="green" data-testid="signup-seller">Quero vender</Checkbox>

        <Button variantColor="green" type="submit" data-testid="signup-btn" isDisabled={false}>Cadastrar</Button>
      </form>
    </FormControl>
  </div>
  );
};

export default Register;

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

  // Habilita ou desabilita o botão de 'Cadastrar'
  const signUpBtnDisabled = (bool) => {
    const btn = document.getElementById('signup-btn');
    btn.disabled = bool;
  };

  // Faz as validações dos campos do formulário 
  const handleFormField = (fieldName ,formField) => {
    validator.schema.fields[`${fieldName}`].validate(formField)
    .then((valid) => {
      console.log('Validação: ', valid);
      // Habilita o botão 'Cadastrar'
      signUpBtnDisabled(false);
      return valid; 
    })
    .catch((err) => {
      console.log('Erro de validação: ', err);
      console.log('ERRORS: ', err.errors[0]);
      // Desabilita o botão 'Cadastrar'
      signUpBtnDisabled(true);
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

        <Checkbox variantColor="green" name="signRole" data-testid="signup-seller">Quero vender</Checkbox>

        <Button variantColor="green" type="submit" id="signup-btn" data-testid="signup-btn">Cadastrar</Button>
      </form>
    </FormControl>
  </div>
  );
};

export default Register;

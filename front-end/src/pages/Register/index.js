import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import { useFormik } from 'formik';

const validator = require('./validateRegister');

function Register() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      signName: '',
      signEmail: '',
      signPassword: '',
      role: false,
    },
    validator,
    onSubmit: (values) => {
      const redirect = values.role === false ? '/products' : '/admin/orders';
      history.push(redirect);
    },
  });

  const [errorMsg, setErrorMsg] = useState('');
  // Habilita ou desabilita o botão de 'Cadastrar'
  // true -> para DESABILITAR o botão
  // false -> para HABILITAR o botão 
  const signUpBtnDisabled = (bool) => {
    const btn = document.getElementById('signup-btn');
    btn.disabled = bool;
  };

  return (
  <div>
    <form onSubmit={ formik.handleSubmit }>
      <FormControl isInvalid={ formik.errors.signName && formik.touched.signName}>
        <FormLabel htmlFor="name">Nome</FormLabel>
        <Input
          type="text"
          name="signName"
          id="name"
          data-testid="signup-name"
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          value={ formik.values.signName }
        />
        <FormErrorMessage>{ formik.errors.signName }</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={ formik.errors.signEmail && formik.touched.signEmail }>
      <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          type="email"
          name="signEmail"
          id="email"
          data-testid="signup-email"
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          value={ formik.values.signEmail }
        />
        <FormErrorMessage>{ formik.errors.signEmail }</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={ formik.errors.signPassword && formik.touched.signPassword }>
        <FormLabel htmlFor="password">Senha</FormLabel>
        <Input
          type="password"
          name="signPassword"
          id="password"
          data-testid="signup-password"
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          value={ formik.values.signPassword }
        />
        <FormErrorMessage>{ formik.errors.signPassword }</FormErrorMessage>
      </FormControl>

      <Checkbox variantColor="green" name="signRole" data-testid="signup-seller">
        Quero vender
      </Checkbox>

      <Button variantColor="green" type="submit" id="signup-btn" data-testid="signup-btn" disabled={ formik.isSubmitting  }>
        Cadastrar
      </Button>
    </form>
  </div>
  );
};

export default Register;

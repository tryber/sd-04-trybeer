import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useFormik } from 'formik';

import { userLogin /* mockUserLogin */ } from '../../api';
import validationSchema from './validateLogin';

const Login = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      loginEmail: '',
      loginPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const result = await userLogin(values.email, values.password);
      const redirect = result.role === 'client' ? '/products' : '/admin/profile';
      history.push(redirect);
    },
  });

  return (
    <div>
      <form onSubmit={ formik.handleSubmit }>
        <FormControl id="loginEmail" isInvalid={ formik.errors.loginEmail && formik.touched.loginEmail }>
          <FormLabel htmlFor="loginEmail">Email</FormLabel>
          <Input
            type="email"
            name="loginEmail"
            data-testid="email-input"
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            value={ formik.values.loginEmail }
          />
          <FormErrorMessage>{formik.errors.loginEmail}</FormErrorMessage>
        </FormControl>
        <FormControl id="loginPassword" isInvalid={ formik.errors.loginPassword && formik.touched.loginPassword }>
          <FormLabel htmlFor="loginPassword">Senha</FormLabel>
          <Input
            type="password"
            name="loginPassword"
            data-testid="password-input"
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            value={ formik.values.loginPassword }
          />
          <FormErrorMessage>{formik.errors.loginPassword}</FormErrorMessage>
        </FormControl>
        <Button variantColor="green" type="submit" data-testid="signin-btn" disabled={ formik.isSubmitting }>
          Entrar
        </Button>
        <Button
          variantColor="blue"
          type="submit"
          data-testid="no-account-btn"
          disabled={ formik.isSubmitting }
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

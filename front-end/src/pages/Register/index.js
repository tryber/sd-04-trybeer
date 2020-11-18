import React from 'react';
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
import validationSchema from './validateRegister';

function Register() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      signName: '',
      signEmail: '',
      signPassword: '',
      signRole: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Values: ', values);
      const redirect = values.signRole ? '/admin/orders' : '/products';
      history.push(redirect);
    },
  });

  return (
  <div>
    <form onSubmit={ formik.handleSubmit }>
      <FormControl id="signName" isInvalid={ formik.errors.signName && formik.touched.signName}>
        <FormLabel htmlFor="signName">Nome</FormLabel>
        <Input
          type="text"
          name="signName"
          data-testid="signup-name"
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          value={ formik.values.signName }
        />
        <FormErrorMessage>{ formik.errors.signName }</FormErrorMessage>
      </FormControl>
      <FormControl id="signEmail" isInvalid={ formik.errors.signEmail && formik.touched.signEmail }>
      <FormLabel htmlFor="signEmail">Email</FormLabel>
        <Input
          type="email"
          name="signEmail"
          data-testid="signup-email"
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          value={ formik.values.signEmail }
        />
        <FormErrorMessage>{ formik.errors.signEmail }</FormErrorMessage>
      </FormControl>
      <FormControl id="signPassword" isInvalid={ formik.errors.signPassword && formik.touched.signPassword }>
        <FormLabel htmlFor="signPassword">Senha</FormLabel>
        <Input
          type="password"
          name="signPassword"
          data-testid="signup-password"
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          value={ formik.values.signPassword }
        />
        <FormErrorMessage>{ formik.errors.signPassword }</FormErrorMessage>
      </FormControl>

      <Checkbox variantColor="green" name="signRole" data-testid="signup-seller" id="signRole" onChange={ formik.handleChange }>
        Quero vender
      </Checkbox>

      <Button variantColor="green" type="submit" id="signup-btn" data-testid="signup-btn" disabled={ formik.isSubmitting || formik.errors.signName || formik.errors.signEmail || formik.errors.signPassword }>
        Cadastrar
      </Button>
    </form>
  </div>
  );
};

export default Register;

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../services/api';
import InputForm from '../components/InputForm';
import { setLS } from '../utils';
import './LoginPage.css';
import Menu from '../components/Menu';

const Login = () => {
  const [form, setForm] = React.useState({ email: '', password: '' });
  const history = useHistory();

  const validateEmail = (userEmail) => {
    const emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(userEmail).toLocaleLowerCase());
  };

  const validatePassword = (userPassword) => {
    const passwordRegex = /^(\d|\w){6,}$/;
    return passwordRegex.test(userPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiResponse = await api.login(form.email, form.password);

    await setLS('user', apiResponse.data);

    if (apiResponse.data && apiResponse.data.role === 'administrator') {
      history.push('/admin/orders');
    }

    if (apiResponse.data && apiResponse.data.role === 'client') {
      history.push('/products');
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="login-container container-general">
      <Menu nomeTela="TryBeer" />
      <form onSubmit={ handleSubmit } className="login-form">
        <InputForm
          name="email"
          value={ form.email }
          label="Email"
          handleChange={ handleChange }
          dataTestId="email-input"
        />
        <InputForm
          name="password"
          value={ form.password }
          label="Password"
          handleChange={ handleChange }
          dataTestId="password-input"
        />
        <button
          type="submit"
          data-testid="signin-btn"
          className="submit-btn"
          disabled={
            !(validateEmail(form.email) && validatePassword(form.password))
          }
        >
          ENTRAR
        </button>
        <Link
          to="/register"
          data-testid="no-account-btn"
          className="no-account-btn"
        >
          Ainda não tenho conta
        </Link>
      </form>
    </div>
  );
};

export default Login;

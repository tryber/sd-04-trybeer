import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Notification } from 'rbx';

import api from '../services/userApi';

const ButtonEnviar = ({ email, password, isDisabled }) => {
  const [redirect, setRedirect] = useState('');
  const [message, setMessage] = useState('');

  const validaLogin = () => {
    api.login(email, password).then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data));
      if (response.data.role === 'administrator') {
        setRedirect('admin');
      } else setRedirect('client');
    })
      .catch((err) => setMessage(err.response.data.message));
  };

  if (redirect === 'admin') return <Redirect to="/admin/orders" />;
  if (redirect === 'client') return <Redirect to="/products" />;

  return (
    <div>
      { message ? <Notification color="danger" >{message}</Notification> : ""}

      <Button
        type="Button"
        data-testid="signin-btn"
        disabled={isDisabled}
        onClick={() => validaLogin()}
      >
        ENTRAR
      </Button>
    </div>
  )
}

ButtonEnviar.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default ButtonEnviar;

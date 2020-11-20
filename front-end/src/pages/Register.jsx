import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import beer from '../assets/video/video.mp4';
import styles from './Register.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const [token, setToken] = useState('');

  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  const checkName = (name) => {
    const regexName = /^[a-z\s]*$/i;
    return regexName.test(name) && name.length >= 12 ? true : false;
  };

  const checkEmail = (email) => {
    const regexEmail = /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i;
    return regexEmail.test(email);
  };

  const role = checked ? 'administrator' : 'client';

  const registerUser = () => {
    axios
      .post('http://localhost:3001/register', { name, email, password, role })
      .then((_res) => setRedirect(true))
      .catch((_error) => setMessage('E-mail already in database.'));
  };

  const createToken = () =>
    axios
      .post('http://localhost:3001/login', { email, password })
      .then((res) => {
        setToken(res.data.token);
      })
      .catch((error) => console.log(error));

  if (token !== '') {
    const objUser = { name, email, token, role };
    localStorage.setItem('user', JSON.stringify(objUser));
  }

  if (role === 'administrator' && redirect)
    return <Redirect to="/admin/orders" />;

  if (role === 'client' && redirect) {
    return <Redirect to="/products" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    createToken();

    registerUser();
  };

  return (
    <section className="generalSection">
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          width: '100%',
          objectFit: 'cover',
          zIndex: '-1',
          height: '100vh',
        }}
      >
        <source src={beer} type="video/mp4" />
      </video>
      <div className="generalDiv">
        <h1 className={styles.cadastrar}>Cadastre-se</h1>
        <form className="generalForm" onSubmit={(e) => handleSubmit(e)}>
          <label className="generalLabel" htmlFor="name">
            Nome
          </label>
          <input
            className="generalInput"
            type="text"
            id="name"
            data-testid="signup-name"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="generalLabel" htmlFor="email">
            Email
          </label>
          <input
            className="generalInput"
            type="email"
            id="email"
            data-testid="signup-email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="generalLabel" htmlFor="password">
            Password
          </label>
          <input
            className="generalInput"
            type="password"
            id="password"
            data-testid="signup-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.minidiv}>
            <label className="generalLabel" htmlFor="seller">
              Quero Vender
            </label>
            <input
              className="generalInput"
              type="checkbox"
              id="seller"
              data-testid="signup-seller"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            />
          </div>
          <button
            className="generalSubmit"
            type="submit"
            data-testid="signup-btn"
            disabled={
              !checkEmail(email) || !checkName(name) || password.length < 6
            }
          >
            Cadastrar
          </button>
        </form>
        {message !== '' && <p>{message}</p>}
      </div>
    </section>
  );
};

export default connect(null, null)(Register);

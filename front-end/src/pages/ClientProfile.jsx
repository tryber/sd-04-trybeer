import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import styles from './Profiles.module.css';

import Menu from '../components/Menu';

const ClientProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [name1, setName1] = useState('');

  const [message, setMessage] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { name, email } = user;
    setName(name);
    setName1(name);
    setEmail(email);
  }, []);

  const editUser = () => {
    axios
      .put('http://localhost:3001/edit', { name, email })
      .then((_res) => setMessage('Atualização concluída com sucesso'))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser();
  };

  return (
    <section className="insideSection">
      <Menu title="Meu perfil" />
      <div className={styles.clientDiv}>
        <form className={styles.clientForm} onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            data-testid="profile-name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            data-testid="profile-email-input"
            readOnly
            value={email}
          />
          <button
            type="submit"
            data-testid="profile-save-btn"
            disabled={name1 === name ? true : false}
          >
            Salvar
          </button>
        </form>
        {message !== '' && <p>{message}</p>}
      </div>
    </section>
  );
};

export default connect(null, null)(ClientProfile);

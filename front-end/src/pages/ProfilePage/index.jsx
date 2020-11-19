import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { getLS } from '../../utils';
import styles from './index.module.css';

import Menu from '../../components/Menu';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    setEmail(getLS('email'));
    setName(getLS('name'));
  }, []);

  const checkNameChange = () => getLS('name') === name ? true : false;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUpdated(!updated);

    await api.updateUserAPI(name, email);
  };

  return (
    <div className={`${styles.profileContainer} container-general`}>
      <Menu nomeTela="Meu perfil" />
      <form onSubmit={handleSubmit} className={styles.profileForm}>
        <div className={styles.profileFieldsContainer}>
          <label htmlFor="name" className={styles.inputLabel}>Nome:</label>
          <input
            data-testid="profile-name-input"
            type="text"
            name="nome"
            value={name}
            className={styles.profileInput}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.profileFieldsContainer}>
          <label htmlFor="email" className={styles.inputLabel}>Email:</label>
          <input
            data-testid="profile-email-input"
            type="text"
            value={email}
            className={styles.profileInput}
            readOnly
          />
        </div>
        <div className={styles.profileFieldsContainer}>
          <button
            data-testid="profile-save-btn"
            type="submit"
            className={styles.submitBtn}
            disabled={checkNameChange()}
          >
            Salvar
          </button>
          {updated && <span>Atualização concluída com sucesso</span>}
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;

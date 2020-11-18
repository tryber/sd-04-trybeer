import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { getLS } from '../../utils';
import './index.css';

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
    <div className="container-general profile-container">
      <Menu nomeTela="Meu perfil" />
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="profile-fields-container">
          <label htmlFor="name" className="input-label">Nome:</label>
          <input
            data-testid="profile-name-input"
            type="text"
            name="nome"
            value={name}
            className="profile-input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="profile-fields-container">
          <label htmlFor="email" className="input-label">Email:</label>
          <input
            data-testid="profile-email-input"
            type="text"
            value={email}
            className="profile-input"
            readOnly
          />
        </div>
        <div className="profile-fields-container">
          <button
            data-testid="profile-save-btn"
            type="submit"
            className="submit-btn"
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

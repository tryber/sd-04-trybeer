import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { getLS, setLS } from '../../utils';

import Menu from '../../components/Menu';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [updated, setUpdated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setLS('name', 'testuser')
    setLS('email', 'user@teste.com')

    setEmail(getLS('email'));
    setName(getLS('name'));

  }, []);

  const emailRegex = /^[a-zA-Z\s,-]{12,}/

  const checkNameChange = () => getLS('name') === name ? true : false;

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setUpdated(!updated)

    await api.updateUserAPI(name, email);
  };

  return (
    <div className="container-general">
      <Menu nomeTela="Meu perfil" />
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            data-testid="profile-name-input"
            type="text"
            name="nome"
            value={name}
            onChange={
              (e) => {
                setName(e.target.value);
              }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            data-testid="profile-email-input"
            type="text"
            value={email}
            readOnly
          />
        </div>
        <div>
          <button
            data-testid="profile-save-btn"
            type="submit"
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

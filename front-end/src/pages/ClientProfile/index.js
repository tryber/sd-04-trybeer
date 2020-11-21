import React, { useState } from 'react';

import Header from '../../components/Header';
// import Footer from '../../components/Rodape';
import { MIN_NAME_LENGTH } from '../../validation';

import api from '../../services/api';

import cheersIcon from '../../assets/beer.svg';

import './styles.css';

const ClientProfile = () => {
  const [userEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put('/', { userName });
  };

  return (
    <div className="container">
      <Header title="Meu perfil" />
      <div className="square">
        <h1 className="pageTitle">Perfil do Cliente</h1>
        <img src={ cheersIcon } className="cheesIcon" alt="Cheers Beer Icon" />
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name" className="label-text">
              Nome
              <input
                className="input-field"
                placeholder="Nome Completo"
                type="text"
                data-testid="profile-name-input"
                value={ userName }
                onChange={ (e) => setUserName(e.target.value) }
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label-text">
              Email
              <input
                data-testid="profile-email-input"
                className="input-field"
                placeholder="Email"
                type="text"
                name="email"
                value={ userEmail }
                readOnly
              />
            </label>
          </div>
          <div className="div_btn">
            <button
              disabled={ userName.length < MIN_NAME_LENGTH || userName === ' ' }
              // disabled={ (userName.length <= minNameLenght) && !(userName !== inputUserName) }
              type="submit"
              data-testid="profile-save-btn"
              className="save-button"
            // onClick={() => getUser(userName, userEmail, setMessage)}
            >
              Salvar
            </button>
            <span>{message}</span>
          </div>
        </form>
        {/* <Footer className="footer" /> */}
      </div>
    </div>
  );
};

export default ClientProfile;

// para por nos services?
// import axios from 'axios';

// const getUser = async (name, email, setMessage) => {
//   try {
//     const { status } = await axios.put(
//       'http://localhost:3001/users',
//       { name, email },
//       { headers: { Authorization: JSON.parse(localStorage.getItem('user')).token } },
//     );
//     const statusOk = 200;
//     if (status === statusOk) { setMessage('Atualização concluída com sucesso') }
//   } catch (err) {
//     setMessage(err.message);
//   }
// };

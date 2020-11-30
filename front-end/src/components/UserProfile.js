import React, { useState } from 'react';
import API from '../services/api';
import Header from './Header';
import SideBar from './SideBarClient';

// import './style.css';

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { name, email } = user;
  const [newName, setNewName] = useState(name);
  const [clicked, setClicked] = useState('');
  const disableButton = newName === name;

  const newUserName = async (e) => {
    e.preventDefault();

    const api = await API.userNameUpdateApi(name, email, newName);

    user.name = api.data;

    return localStorage.setItem('user', JSON.stringify(user));
  };

  function setMessage() {
    setClicked('Atualização concluída com sucesso');
  }
  return (
    <div>
      <Header title="Meu perfil" />
      <SideBar />
      <form onSubmit={ newUserName } style={ { padding: '25%', paddingTop: '10%' } }>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">
            Name
            <input
              data-testid="profile-name-input"
              onChange={ (e) => setNewName(e.target.value) }
              type="text"
              className="form-control"
              id="disabledInput"
              placeholder={ name }
            />
          </label>

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            Email
            <input
              data-testid="profile-email-input"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={ email }
              readOnly
            />
          </label>

        </div>
        <button
          data-testid="profile-save-btn"
          type="submit"
          className="btn btn-primary"
          disabled={ disableButton }
          onClick={ setMessage }
        >
          Salvar
        </button>
        <p>{ clicked }</p>
      </form>
    </div>
  );
};

export default UserProfile;

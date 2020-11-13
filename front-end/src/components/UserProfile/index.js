import React, { useState } from 'react';
import Header from '../Header/index';

import './style.css';

const UserProfile = ({ name, mail }) => {
  const [newName, setNewName] = useState(name);
  const disableButton = newName === name;
  return (
    <div>
      <Header title={'Meu Perfil'} />
      <form action="/profile" method="POST">
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input
            data-testid="profile-name-input"
            onChange={(e) => setNewName(e.target.value)}
            type="text"
            className="form-control"
            id="disabledInput"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            data-testid="profile-email-input"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={mail}
            disabled
          />
        </div>
        <button
          data-testid="profile-save-btn"
          type="submit"
          className="btn btn-primary"
          disabled={disableButton}
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default UserProfile;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/index';

import './style.css';

const UserProfile = ({ name, mail }) => {
  const [newName, setNewName] = useState(name);
  const disableButton = newName === name;
  return (
    <div>
      <Header title={ 'Meu perfil' } />
      <form action="/profile" method="POST">
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input
            name="exampleInputPassword1"
            data-testid="profile-name-input"
            onChange={ (e) => setNewName(e.target.value) }
            type="text"
            className="form-control"
            id="disabledInput"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            name="exampleInputEmail1"
            data-testid="profile-email-input"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={ mail }
            readOnly
          />
        </div>
        <button
          data-testid="profile-save-btn"
          type="submit"
          className="btn btn-primary"
          disabled={ disableButton }
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string,
  mail: PropTypes.string,
}

export default UserProfile;

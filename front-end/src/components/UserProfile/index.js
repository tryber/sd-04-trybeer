import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Header from '../Header/index';

import './style.css';
import SideBar from '../SideBar';

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { name, email } = user;
  const [newName, setNewName] = useState(name);
  const disableButton = newName === name;
  return (
    <div>
      <Header title="Meu perfil" />
      <SideBar userType="client" />
      <form action="/profile" method="POST">
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
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

// UserProfile.propTypes = {
//   name: PropTypes.string.isRequired,
//   mail: PropTypes.string.isRequired,
// };

export default UserProfile;

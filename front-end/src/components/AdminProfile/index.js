import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/index';

import './style.css';

const AdminProfile = ({ name, mail }) => {
  function newDirection() {
    window.location.href = 'http://localhost:3000/';
  }
  return (
    <div>
      <Header title="Admin - Perfil" />
      <form action="/profile" method="POST">
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">
            Name
            <input
              name="exampleInputPassword1"
              data-testid="profile-name"
              type="text"
              className="form-control"
              id="disabledInput"
              value={ name }
              readOnly
            />
          </label>

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            Email
            <input
              name="exampleInputEmail1"
              data-testid="profile-email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={ mail }
              readOnly
            />
          </label>

        </div>
        <button
          data-testid="profile-save-btn"
          type="button"
          className="btn btn-primary"
          onClick={ () => newDirection() }
        >
          Login
        </button>
      </form>
    </div>
  );
};

AdminProfile.propTypes = {
  name: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
};

export default AdminProfile;

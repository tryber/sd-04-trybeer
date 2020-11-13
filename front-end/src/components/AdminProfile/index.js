import React from 'react';
import Header from '../Header/index';
import PropTypes from 'prop-types';

import './style.css';

const AdminProfile = ({ name, mail }) => {
  const newDirection = () => window.location.href = 'http://localhost:3000/';
  return (
    <div>
      <Header title={ 'Admin - Perfil' } />
      <form action="/profile" method="POST">
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input
            name="exampleInputPassword1"
            data-testid="profile-name"
            onChange={ (e) => setNewName(e.target.value) }
            type="text"
            className="form-control"
            id="disabledInput"
            value={ name }
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
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
  name: PropTypes.string,
  mail: PropTypes.string,
};

export default AdminProfile;

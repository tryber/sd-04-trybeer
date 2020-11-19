import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../Header/index';
import SideBar from '../SideBar';

import './style.css';

const AdminProfile = () => {
  function login() {
    window.location.href = 'http://localhost:3000/';
  }

  const user = JSON.parse(localStorage.getItem('user'));
  const name = user.name;
  const mail = user.email;
  return (
    <div>
      <Header title="Admin - Perfil" />
      <SideBar userType="admin" />

      <form >
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">
            Name
            <input
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
          <label htmlFor="exampleInputEmail1.form-control">
            Email
            <input
              data-testid="profile-email"
              type="email"
              className="form-control"
              id="exampleInputEmail1.form-control"
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
          onClick={ () => login() }
        >
          Login
        </button>
      </form>
    </div>
  );
};

// AdminProfile.propTypes = {
//   name: PropTypes.string.isRequired,
//   mail: PropTypes.string.isRequired,
// };

export default AdminProfile;

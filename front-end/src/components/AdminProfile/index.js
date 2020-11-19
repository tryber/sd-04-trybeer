import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../Header/index';
import SideBar from '../SideBar';

import './style.css';

const AdminProfile = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const { name, email } = user;
  return (
    <div>
      <Header title="Admin - Perfil" />
      <SideBar userType="admin" />

      <form>
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
              value={ email }
              readOnly
            />
          </label>

        </div>
      </form>
    </div>
  );
};

// AdminProfile.propTypes = {
//   name: PropTypes.string.isRequired,
//   mail: PropTypes.string.isRequired,
// };

export default AdminProfile;

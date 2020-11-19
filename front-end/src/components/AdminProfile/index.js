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
          <span
              data-testid="profile-name"
              id="exampleInputName1"
            >{ name }
          </span>
        </div>
        <div className="form-group">
            <span
              data-testid="profile-email"
            >{ email }
          </span>

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

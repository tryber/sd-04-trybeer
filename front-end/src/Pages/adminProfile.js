import React from 'react';
import { Redirect } from 'react-router-dom';
import AdminTopMenu from '../Components/Menu/admin/AdminTopMenu';

import './styleClientPage.css';

function AdminProfile() {
  const data = JSON.parse(localStorage.getItem('user'));
  if (!data || data.role !== 'administrator') return <Redirect to="/login" />;
  return (
    <div>
      <AdminTopMenu title="Admin - Perfil" />
      <div className="container">
        <h2>Perfil</h2>
        <h3 data-testid="profile-name">
          Nome:
          {data.name}
        </h3>
        <h3 data-testid="profile-email">
          Email:
          {data.email}
        </h3>
      </div>
    </div>
  );
}

export default AdminProfile;

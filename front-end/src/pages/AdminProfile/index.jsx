import React from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../../components/AdminMenu';
import { getLS } from '../../utils/index'


function AdminProfile() {
  const user = getLS('user');
  // const history = useHistory();

  if(user === null || user.role !== "administrator") return <Redirect to='/login' />;
  return (
    <div>
    {console.log('user', user)}
      <Menu />
      <div style={ { display: 'flex', flexDirection: 'column', marginTop: '150px' } }>
          <h2>Perfil</h2>
          <p data-testid="profile-name">Nome: {user.name}</p>
          <h3 data-testid="profile-email">Email: {user.email}</h3>
      </div>
    </div>
  );
}

export default AdminProfile;

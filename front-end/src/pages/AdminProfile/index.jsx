import React from 'react';
import { useHistory } from 'react-router-dom';
import MenuAdmin from '../../components/Menu/MenuAdmin';
import { getLS } from '../../utils/index'


function AdminProfile() {
  const user = getLS('user');
  console.log('user', user)
  const history = useHistory();
  if(!user || user.role !== "administrator") history.push('/login');
  return (
    <div>
      <MenuAdmin title="Meu perfil" />
      <div style={ { display: 'flex', flexDirection: 'column', marginTop: '150px' } }>
          <h2>Perfil</h2>
          <p data-testid="profile-name">Nome: {user.name}</p>
          <h3 data-testid="profile-email">Email: {user.email}</h3>
      </div>
    </div>
  );
}

export default AdminProfile;

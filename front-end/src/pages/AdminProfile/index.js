import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import cheersIcon from '../../assets/beer.svg';
import './styles.css';

const AdminProfile = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const { name, userEmail: email } = JSON.parse(localStorage.getItem('user'));
    setUserName(name);
    setUserEmail(email);
  }, []);

  return (
    <div className="container">
      <Header title="Admin - Perfil" />
      <div className="square">
        <h1 className="pageTitle">Perfil do Administrador</h1>
        <img src={ cheersIcon } className="cheesIcon" alt="Cheers Beer Icon" />
        <p data-testid="profile-name">
          { userName }
        </p>
        <p data-testid="profile-email">
          { userEmail }
        </p>
      </div>
    </div>
  );
};

export default AdminProfile;

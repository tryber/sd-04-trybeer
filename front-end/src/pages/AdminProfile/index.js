import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import profileIcon from '../../assets/profile.svg';
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
        <img src={ profileIcon } className="profileIcon" alt="Cheers Beer Icon" />
        <p data-testid="profile-name" className="admin-information">
          { userName }
        </p>
        <p data-testid="profile-email" className="admin-information">
          { userEmail }
        </p>
      </div>
    </div>
  );
};

export default AdminProfile;

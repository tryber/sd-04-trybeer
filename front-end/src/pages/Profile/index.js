import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const Profile = () => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.user) history.push('/login');
    const userRole = jwtDecode(localStorage.user);
  }, []);

  return (
    <p>
      This is the
      {' '}
      {userRole}
      {' '}
      profile page
    </p>
  );
};
export default Profile;

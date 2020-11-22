import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { Button } from '@chakra-ui/react';
import jwtDecode from 'jwt-decode';

const Profile = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    if (!localStorage.user) history.push('/login');
    setUser(jwtDecode(localStorage.user));
    if (jwtDecode(localStorage.user).role === 'client') setIsAdmin(false);
  }, [isAdmin, history]);
  return (
    <Formik
      enableReinitialize
      initialValues={ {
        profileName: user.name,
        profileEmail: user.email,
      } }

      onSubmit={ async (values) => {
        await userLogin(values.loginEmail, values.loginPassword);
      } }
    >
      {({
        isSubmitting, handleSubmit, handleChange, handleBlur, values, errors,
      }) => (
        <form onSubmit={ handleSubmit }>
          <input
            type="text"
            onChange={ handleChange }
            onBlur={ handleBlur }
            value={ values.name }
            data-testid="profile-name"
            disabled={ isAdmin }
            name="profileName"
          />
          <br />
          <input
            type="text"
            onChange={ handleChange }
            onBlur={ handleBlur }
            value={ values.email }
            data-testid="profile-email"
            disabled={ isAdmin }
            name="profileEmail"
          />
          <br />
          {errors.name && <div id="feedback">{errors.name}</div>}
          <Button type="submit" disabled={ isSubmitting }>Submit</Button>
        </form>
      )}
    </Formik>
  );
};
export default Profile;

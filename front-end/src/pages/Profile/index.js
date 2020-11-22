import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { Button } from '@chakra-ui/react';
import jwtDecode from 'jwt-decode';

import { userUpdate } from '../../api';
import Alert from '../../components/Alert';

const Profile = () => {
  const history = useHistory();
  const [localUser, setLocalUser] = useState({});
  const [hasChanged, setHasChanged] = useState(true);
  const [alertMsg, setAlertMsg] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  useEffect(() => {
    if (!localStorage.user) history.push('/login');
    setLocalUser(jwtDecode(localStorage.user));
  }, [hasChanged, history]);

  return (
    <>
      <Alert isOpen={ isOpen } onClose={ onClose } message={ alertMsg } />
      <Formik
        enableReinitialize
        initialValues={ {
          profileName: localUser.name,
          profileEmail: localUser.email,
        } }
        onSubmit={ async (values) => {
          const result = await userUpdate(localUser.id, values.profileName);
          /*  if (result.status !== statusCode) {
                setError(result.data.message);
                setIsOpen(true);
                formik.resetForm();
                return null;
              } */
          localStorage.user = JSON.stringify(result);
          setAlertMsg('Atualização concluída com sucesso');
          setIsOpen(true);
        } }
      >
        {({
          isSubmitting, handleSubmit, handleChange, handleBlur, values, errors,
        }) => (
          <form onSubmit={ handleSubmit }>
            <input
              type="text"
              onChange={ (e) => { handleChange(e); setHasChanged(false); } }
              onBlur={ handleBlur }
              value={ values.profileName }
              data-testid="profile-name"
              name="profileName"
            />
            <br />
            <input
              type="text"
              value={ values.profileEmail }
              data-testid="profile-email"
              disabled
              name="profileEmail"
            />
            <br />
            {errors.name && <div id="feedback">{errors.name}</div>}
            <Button type="submit" disabled={ hasChanged || isSubmitting }>Submit</Button>
          </form>
        )}
      </Formik>
    </>
  );
};
export default Profile;

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { userUpdate } from '../../api';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import Alert from '../../components/Alert';

const Profile = () => {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const onClose = () => setIsOpen(false);

  useEffect(() => {
    if (!localStorage.user) history.push('/login');
    setUser(jwtDecode(JSON.parse(localStorage.user)));
  }, []);

  const formik = useFormik({
    initialValues: {
      Email: user.email,
      name: user.name,
    },
    onSubmit: async (values) => {
      const result = await userUpdate(values.name);
      if (result.status !== statusCode) {
        setError(result.data.message);
        setIsOpen(true);
        formik.resetForm();
        return null;
      }
      if (!localStorage.user) localStorage.user = JSON.stringify(result.data);
      const redirect =
        jwtDecode(result.data).role === 'client'
          ? '/products'
          : '/admin/orders';
      return history.push(redirect);
    },
  });

  return (
    <div>
      <p>This is the {userRole.role} profile page</p>
      <Alert isOpen={isOpen} onClose={onClose} message={error} />
      <form action="/profile">
        <input readOnly value={userRole.email} />
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value={userRole.name}></input>
        <input type="submit" value="Submit"></input>
      </form>
      <Button
        type="submit"
        data-testid="signin-btn"
        disabled={
          formik.errors.loginPassword ||
          formik.errors.loginEmail ||
          formik.isSubmitting
        }
      >
        ENTRAR
      </Button>
    </div>
  );
};
export default Profile;

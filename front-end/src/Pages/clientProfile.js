import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import {
  Field, Label, Input, Button, Notification,
} from 'rbx';
import api from '../services/userApi';
import TopMenu from '../Components/Menu/TopMenu';

const Profile = () => {
  const [auth, setAuth] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [disabled, isDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const changeName = (e) => {
    setName(e.target.value);
    isDisabled(false);
  };

  const editProfile = (e) => {
    e.preventDefault();
    api.changeProfile(email, name).then((response) => {
      setMessage(response.data);
      const user = JSON.parse(localStorage.getItem('user'));
      user.name = name;
      localStorage.setItem('user', JSON.stringify(user));
    });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user === null) setAuth(false);
    else {
      api.profile(user.token).then(({ data }) => {
        if (data === 'jwt malformed') setAuth(false);
        else {
          setName(data.name);
          setEmail(data.email);
        }
      });
    }
  }, []);

  if (auth === false) return <Redirect to="/login" />;
  return (
    <div>
      <div>
        <TopMenu title="Meu perfil" />
      </div>
      {message ? <Notification color="danger">{message}</Notification> : ''}
      <form onSubmit={ editProfile }>
        <Field>
          <Label htmlFor="name">Name:</Label>
          <Input
            name="name"
            type="name"
            value={ name }
            data-testid="profile-name-input"
            onChange={ (e) => changeName(e) }
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email:</Label>
          <Input
            name="email"
            type="email"
            value={ email }
            readOnly
            data-testid="profile-email-input"
          />
        </Field>
        <Button disabled={ disabled } data-testid="profile-save-btn">
          Salvar
        </Button>
      </form>
    </div>
  );
};

export default Profile;

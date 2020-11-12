import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { 
  Field, Label, Input, Button, Notification
} from 'rbx';
import api from '../services/userApi';

const Profile = () => {
  const [auth, setAuth] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState();
  const [disabled, isDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const changeName = (e) => {
    setName(e.target.value);
    isDisabled(false);
  };

  const editProfile = (e) => {
    e.preventDefault();
    api.changeProfile(id, name).then((response) => {
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
      api.profile(user.email).then(({ data }) => {
        setName(data.name);
        setEmail(data.email);
        setId(data.id);
      });
    }
  }, []);

  if (auth === false) return <Redirect to="/login" />;
  return (
    <div>
      <h2 data-testid="top-title">Meu perfil</h2>
      {message ? <Notification color="danger">{ message }</Notification> : ''}
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
        <Button disabled={ disabled }>Salvar</Button>
      </form>
    </div>
  );
};

export default Profile;

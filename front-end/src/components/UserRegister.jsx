import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const UserRegister = () => {
  const history = useHistory();

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [checkbox, setCheckbox] = useState('');

  // console.log(checkbox ? 'ligado' : 'desligado');

  const isNameValid = (name = '') => name.match(/^([a-zA-Zà-úÀ-Ú]|\s+)+$/);

  const nameValideted = () => {
    if (!isNameValid(name)) return true;
    return false;
  };

  const isEmailValid = (email = '') => email.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/i);

  const emailValideted = () => {
    if (!isEmailValid(email)) return true;
    return false;
  };

  const disableButton =
    !name ||
    name.length < 12 ||
    nameValideted() ||
    !email ||
    !password ||
    password.length < 6 ||
    emailValideted();

  console.log(disableButton);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('o checkbox está: ', !!checkbox);
    if (checkbox == 'on') return history.push('/admin/orders');
    return history.push('/products');
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <section className="card w-75 mx-auto m-3">
          <div className="form-group w-75 mx-auto">
            <label htmlFor="name">Nome</label>
            <input
              data-testid="signup-name"
              id="name"
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              minLength="12"
              className="form-control"
            />
          </div>

          <div className="form-group w-75 mx-auto">
            <label htmlFor="email">Email</label>
            <input
              data-testid="signup-email"
              id="email"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="form-group w-75 mx-auto">
            <label htmlFor="password">Password</label>
            <input
              data-testid="signup-password"
              id="password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              minLength="6"
              className="form-control"
            />
          </div>

          <div className="form-group w-75 mx-auto">
            <input
              data-testid="signup-seller"
              id="sell"
              name="sell"
              type="checkbox"
              onChange={(e) => setCheckbox(e.target.value)}
            />
            <label htmlFor="sell" className="m-2">
              Quero Vender
            </label>
          </div>

          <button
            data-testid="signup-btn"
            type="submit"
            disabled={disableButton}
            className="btn btn-warning w-50 mx-auto m-2"
          >
            Cadastrar
          </button>
        </section>
      </form>
    </div>
  );
};

export default UserRegister;

import React, { useState } from 'react';
import cheersIcon from './beer.svg';
import './clientProfile.css';

const ClientProfile = () => {
  const [userEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [inputUserName] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [message] = useState('');

  // const [userEmail, /* setUserEmail */] = useState('');
  // const [userName, setUserName] = useState('');
  // const [inputUserName, /* setInputUserName */] = useState('');
  // const [disableButton, setDisableButton] = useState(true);
  // const [message, /* setMessage */] = useState('');
  // useEffect(() => {
  //   const { email, name } = JSON.parse(localStorage.getItem('user'));
  //   setUserEmail(email);
  //   setUserName(name);
  //   setInputUserName(name);
  // }, []);

  return (
    <div className="container">
      <div className="square">
        <h1 className="pageTitle">Perfil do Cliente</h1>
        <img src={ cheersIcon } className="cheesIcon" alt="Cheers Beer Icon" />
        <form method="POST" action="/profile" className="form">
          <div className="form-group">
            <label htmlFor="name" className="label-text">
              Nome
              <input
                className="input-field"
                placeholder="Nome Completo"
                type="text"
                data-testid="profile-name-input"
                name="name"
                value={ userName }
                onChange={ (e) => {
                  setUserName(e.target.value);
                  setDisableButton(
                    !(e.target.value.length >= 12) && !(e.target.value !== inputUserName),
                  );
                } }
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label-text">
              Email
              <input
                data-testid="profile-email-input"
                className="input-field"
                placeholder="Email"
                type="text"
                name="email"
                value={ userEmail }
                readOnly
              />
            </label>
          </div>
          <div className="div_btn">
            <button
              disabled={ disableButton }
              type="button"
              data-testid="profile-save-btn"
              className="save-button"
            // onClick={() => getUser(userName, userEmail, setMessage)}
            >
              Salvar
            </button>
            <span>{message}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientProfile;

// para por nos services?
// import axios from 'axios';

// const getUser = async (name, email, setMessage) => {
//   try {
//     const { status } = await axios.put(
//       'http://localhost:3001/users',
//       { name, email },
//       { headers: { Authorization: JSON.parse(localStorage.getItem('user')).token } },
//     );
//     const statusOk = 200;
//     if (status === statusOk) { setMessage('Atualização concluída com sucesso') }
//   } catch (err) {
//     setMessage(err.message);
//   }
// };

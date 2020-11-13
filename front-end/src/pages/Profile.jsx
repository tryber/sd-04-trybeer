import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import api from '../services/api';

const sendEdit = async (e, name, email) => {
  e.preventDefault();
  await api.put('/profile', { name, email }); // ========================== //
};

const URL = 'http://localhost:3001/profile/1';

export default () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [newName, setNewName] = useState('');

  useEffect(() => {
    /*     const { name, email, token, role } =
      JSON.parse(localStorage.getItem('user')) || []; */
    //    setName(name);

    axios.get(URL).then((response) => {
      setUserName(response.data.name);
      setName(response.data.name);
      setNewName(response.data.name);
      setUserEmail(response.data.email);
    });
  }, []);

  const callSetName = (value) => {
    setName(value);
    setNewName(value);
  };

  const validateEdit = (value, compare) => value === compare;

  return (
    <div>
      <div className="container">
        <div className="col-8">
          <h1>Profile</h1>
          <h2>{newName}</h2>
          <form method="PUT" action="">
            <label htmlFor="">Name</label>
            <input
              onChange={(e) => callSetName(e.target.value)}
              type="text"
              name={newName}
              value={newName}
              className="form-control"
            />
            <br />
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              name={userEmail}
              className="form-control"
              value={userEmail}
              readOnly
            />
            <br />
            <button
              onClick={(e) => sendEdit(e, newName, userEmail)}
              className="btn btn-outline-success"
              disabled={validateEdit(newName, userName)}
            >
              Salvar
            </button>
          </form>
          usuário {newName}
        </div>
      </div>
    </div>
  );
};

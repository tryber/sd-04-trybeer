import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const sendEdit = (e) => {
  e.preventDefault();
  return alert("entrou no sendEdit");
};

const URL = "http://localhost:3001/profile";

export default () => {
  const { email, setEmail, userName, setUserName } = useContext(AppContext);

  useEffect(() => {
    axios.get(URL).then((result) => console.log(result));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="col-8">
          <h1>Profile</h1>
          <form method="POST" action="">
            <label htmlFor="">Name</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              value={userName}
              className="form-control"
            />
            <br />
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              className="form-control"
              value={email}
              readOnly
            />
            <br />
            <button
              onClick={(e) => sendEdit(e)}
              className="btn btn-outline-success"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

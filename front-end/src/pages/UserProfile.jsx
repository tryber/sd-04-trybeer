import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { putUpdate } from "../services/TrybeerApi";

function UserProfile() {
  const { name, email } = JSON.parse(localStorage.getItem("user"));
  const [userName, setUserName] = useState(name);
  const [message, setMessage] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
    const update = await putUpdate(userName, email);
    setMessage(update.data.message);
  }
  
  return !name ? (
    <Redirect to="/login" />
  ) : (
    <form onSubmit={handleForm}>
      <label htmlFor="name">
        Name:
        <input
          data-testid="profile-name-input"
          type="text"
          name="name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          data-testid="profile-email-input"
          type="text"
          name="email"
          value={email}
          readOnly
        />
      </label>

      <button data-testid="profile-save-btn" type="submit" disabled={userName === name}>
        Salvar
      </button>
      <span>{message}</span>
    </form>
  );
}

export default UserProfile;

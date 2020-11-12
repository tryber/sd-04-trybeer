import React from 'react';

const Input = ({ name, handleChange, dataTestId, label, value }) => {
  return (
    <div className="login-fields-container">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        type={name}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        data-testid={dataTestId}
        className="login-input"
      />
    </div>
  );
};

export default Input;

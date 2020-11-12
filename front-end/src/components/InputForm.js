import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name, handleChange, dataTestId, label, value,
}) => (
    <div className="login-fields-container">
    <label htmlFor={ name } className="input-label">
      { label }
    </label>
    <input
      type={ name }
      id={ name }
      name={ name }
      value={ value }
      onChange={ handleChange }
      data-testid={ dataTestId }
      className="login-input"
    />
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;

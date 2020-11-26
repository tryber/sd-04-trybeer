import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name,
  handleChange,
  dataTestId,
  label,
  value,
  type,
  className,
}) => (
  <div className="fields-container">
    <label htmlFor={ name } className="input-label">
      { label }
    </label>
    <input
      type={ type }
      id={ name }
      name={ name }
      value={ value }
      onChange={ handleChange }
      data-testid={ dataTestId }
      className={ className }
    />
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  className: '',
};

export default Input;

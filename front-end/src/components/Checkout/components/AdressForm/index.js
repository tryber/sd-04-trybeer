import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const AdressForm = ({ cartState }) => {
  const [checkoutBtnDisabled, setCheckoutBtnDisabled] = useState(true);

  useEffect(() => {
    if (cartState.length < 1) {
      setCheckoutBtnDisabled(true);
    } else {
      setCheckoutBtnDisabled(false);
    }
  }, [cartState]);

  return (
    <div className="adress-form-container">
      <h2>Endereço</h2>
      <form>
        <label htmlFor="street">
          Rua
          <input data-testid="checkout-street-input" type="text" id="street" />
        </label>
        <label htmlFor="number">
          Número da casa
          <input data-testid="checkout-house-number-input" type="text" id="number" />
        </label>
        <button data-testid="checkout-finish-btn" type="button" disabled={ checkoutBtnDisabled }>Finalizar Pedido</button>
      </form>
    </div>
  );
};

AdressForm.propTypes = {
  cartState: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AdressForm;

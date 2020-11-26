import React, { useState } from 'react';

import './style.css';

const AdressForm = () => {
  const [rua, setRua] = useState('');
  const [numeroCasa, setNumeroCasa] = useState('');

  const validateCheckoutButton = (ruaEnd, numeroEnd) => ruaEnd === '' || numeroEnd === '';

  return (
    <div className="adress-form-container">
      <h2>Endereço</h2>
      <form>
        <label htmlFor="street">
          Rua
          <input
            data-testid="checkout-street-input"
            type="text"
            id="street"
            value={ rua }
            onChange={ (e) => setRua(e.target.value) }
          />
        </label>
        <label htmlFor="number">
          Número da casa
          <input
            data-testid="checkout-house-number-input"
            type="text"
            id="number"
            value={ numeroCasa }
            onChange={ (e) => setNumeroCasa(e.target.value) }
          />
        </label>
        <button
          data-testid="checkout-finish-btn"
          type="button"
          disabled={ validateCheckoutButton(rua, numeroCasa) }
        >
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
};

export default AdressForm;

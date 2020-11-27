import React, { useState } from 'react';
import propTypes from 'prop-types';
import { setLS } from '../../../helpers/index';

const checkFields = (e, history, setTotalPriceCart) => {
  e.preventDefault();

  // Correção lint, magic number
  const zero = 0;
  const mil = 1000;
  // const rua = e.target['inp-rua'].value;
  // const numero = e.target['inp-numero'].value;
  // const button = document.getElementById('but-submit');
  const elMsg = document.getElementById('msg');

  elMsg.innerText = 'Compra realizada com sucesso!';

  // Zerar local storage e context
  localStorage.removeItem('qttPdtsCart');
  setLS('totalPriceCart', zero);
  setTotalPriceCart(zero);
  setTimeout(() => history.push('/products'), mil);
};

const CheckoutForm = ({ history, setTotalPriceCart }) => {
  const [inpRua, setInpRua] = useState('');
  const [inpNumber, setInpNumber] = useState('');

  return (
    <form onSubmit={ (e) => checkFields(e, history, setTotalPriceCart) }>
      <h1>Endereço</h1>
      <label htmlFor="inp-rua">
        Rua:
        <input
          id="inp-rua"
          data-testid="checkout-street-input"
          type="text"
          value={ inpRua }
          onChange={ (e) => setInpRua(e.target.value) }
        />
      </label>
      <br />
      <label htmlFor="inp-numero">
        Número da casa:
        <input
          id="inp-numero"
          data-testid="checkout-house-number-input"
          type="text"
          value={ inpNumber }
          onChange={ (e) => setInpNumber(e.target.value) }
        />
      </label>
      <br />
      <button
        id="but-submit"
        type="submit"
        data-testid="checkout-finish-btn"
        disabled={ !(inpRua && inpNumber) || false }
      >
        Finalizar Pedido
      </button>
      <br />
      <div id="msg" />
    </form>
  );
};

CheckoutForm.propTypes = {
  history: propTypes.objectOf(propTypes.string).isRequired,
  setTotalPriceCart: propTypes.func.isRequired,
};

export default CheckoutForm;

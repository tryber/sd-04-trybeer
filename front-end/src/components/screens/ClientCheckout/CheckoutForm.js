import React, { useState } from 'react';
import propTypes from 'prop-types';
import api from '../../../services/api';
import { getLS, setLS } from '../../../helpers/index';

const checkFields = async (e, history, totalPriceCart, setTotalPriceCart, inpRua, inpNumber) => {
  e.preventDefault();

  // Correção lint, magic number
  const zero = 0;
  const um = 1;
  const mil = 1000;
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + um;
  const { token } = getLS('user');
  const order = {
    totalPrice: totalPriceCart,
    deliveryAddress: inpRua,
    deliveryNumber: inpNumber,
    saleDate: `${day}/${month}`,
    status: 'pendente',
  };
  const elMsg = document.getElementById('msg');

  elMsg.innerText = 'Compra realizada com sucesso!';
  console.log('form')
  // Armazena pedido no banco
  await api.setOrders(token, order);

  // Zerar local storage e context
  localStorage.removeItem('qttPdtsCart');
  setLS('totalPriceCart', zero);
  setTotalPriceCart(zero);
  setTimeout(() => history.push('/products'), mil);
};

const CheckoutForm = ({ history, totalPriceCart, setTotalPriceCart }) => {
  const [inpRua, setInpRua] = useState('');
  const [inpNumber, setInpNumber] = useState('');

  return (
    <form
      onSubmit={
        (e) => checkFields(e, history, totalPriceCart, setTotalPriceCart, inpRua, inpNumber)
      }
    >
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
  totalPriceCart: propTypes.number.isRequired,
  setTotalPriceCart: propTypes.func.isRequired,
};

export default CheckoutForm;

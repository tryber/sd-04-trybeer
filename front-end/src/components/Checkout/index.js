import React, { useEffect, useState } from 'react';
import moment from 'moment';

import Header from '../Header';
import SideBar from '../SideBarCLI';

import API from '../../services/api';

const timestamp = new Date();
const time = moment(timestamp).format('yyyy-D-M hh:mm:ss');

const zero = 0;
const waitingTime = 3000;

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(zero);
  const [streetValue, setStreetValue] = useState('');
  const [numberValue, setNumberValue] = useState(zero);
  const [finishedOrder, setFinishedOrder] = useState('');
  const [noProductMessage, setNoProductMessage] = useState('');

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
    setTotal(JSON.parse(localStorage.getItem('totalPrice')));
    if (total === zero) {
      return setNoProductMessage('Não há produtos no carrinho');
    }
    return setNoProductMessage('');
  }, [total]);

  function ableSubmitOrder() {
    if (
      total > zero
      && streetValue.length > zero
      && numberValue.length > zero
    ) {
      return false;
    }
    return true;
  }

  function removeItem(deleteFromCart) {
    const exclude = cart.filter(
      (deleteOne) => deleteOne.id !== deleteFromCart.id,
    );
    localStorage.setItem('cart', JSON.stringify(exclude));
    const price = exclude.reduce((acc, item) => acc + item.totalPrice, zero);
    localStorage.setItem('totalPrice', JSON.stringify(price));
    setTotal(price);
    return price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  const { id, token } = JSON.parse(localStorage.getItem('user'));

  const saveOrder = (userId, auth, orderPrice, num, street, date) => {
    API.setOrder(userId, auth, orderPrice, num, street, date);
  };

  return (
    <div>
      <Header title="Cliente - Checkout" />
      <SideBar />
      <h4>Produtos</h4>
      <span>{noProductMessage}</span>
      <ul className="list-group">
        {cart.map((item) => (
          <li
            key={ item.id }
            data-testid={ `${item.id - 1}-product-name` }
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              data-testid={ `${item.id - 1}-product-qtd-input` }
              className="badge badge-primary badge-pill"
            >
              {item.quantity}
            </span>
            {`- ${item.name}`}
            <span
              data-testid={ `${item.id - 1}-product-total-value` }
              className="badge badge-primary badge-pill"
            >
              {item.totalPrice.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <span
              data-testid={ `${item.id - 1}-product-unit-price` }
              className="badge badge-primary badge-pill"
            >
              {`(${item.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })} un)`}
            </span>
            <button
              data-testid={ `${item.id - 1}-removal-button` }
              onClick={ () => removeItem(item) }
              type="button"
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <h6 data-testid="order-total-value">
        Total:
        {total.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </h6>
      <form method="POST">
        <h4>Endereço</h4>
        <div className="form-group">
          <label htmlFor="exampleInputText1">
            Rua:
            <input
              name="street"
              data-testid="checkout-street-input"
              onChange={ (e) => setStreetValue(e.target.value) }
              type="text"
              className="form-control"
              id="exampleInputText1"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputNumber1">
            Número da casa:
            <input
              data-testid="checkout-house-number-input"
              onChange={ (e) => setNumberValue(e.target.value) }
              type="number"
              className="form-control"
              id="exampleInputNumber1"
            />
          </label>
        </div>
        <button
          type="button"
          data-testid="checkout-finish-btn"
          disabled={ ableSubmitOrder() }
          onClick={ () => {
            setFinishedOrder('Compra realizada com sucesso!');
            saveOrder(id, token, total, numberValue, streetValue, time);
            setTimeout(() => {
              window.location.href = 'http://localhost:3000/products';
              localStorage.removeItem('cart');
              localStorage.removeItem('totalPrice');
            }, waitingTime);
          } }
          className="btn btn-primary"
        >
          Finalizar Pedido
        </button>
        <span>{finishedOrder}</span>
      </form>
    </div>
  );
};

export default Checkout;

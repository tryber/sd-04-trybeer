import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { useHistory, Redirect } from 'react-router-dom';
import { postOrder } from '../services/TrybeerApi';

const Checkout = () => {
  const user = JSON.parse(localStorage.getItem('user') || null)
  const history = useHistory();
  const [cart, setCart] = useState([]);
  const [refresh, setRefresh] = useState('');
  const [nameAdress, setNameAdress] = useState('');
  const [numberAdress, setNumberAdress] = useState('');
  const [message, setMessage] = useState(null);
  const numberZero = 0;
  const time = 2000;

  const removeItemCart = (index) => {
    cart.splice(index, 1);
    setRefresh(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const totalPrice = cart.reduce((acc, { price, quantity }) => acc + (price * quantity), numberZero);
  
  const requestApi = async () => {
    const response = await postOrder(nameAdress, numberAdress, cart, user, totalPrice);
    if (response.data.message) return setMessage(response.data.message);
  }

  useEffect(() => {
    setCart(Object.values(JSON.parse(localStorage.getItem('cart')) || []));
  }, [refresh]);

  return (
    <>
      <Header>Finalizar Pedido</Header>
      <h2>Produtos</h2>

      {cart.length < 1 && <h2>Não há produtos no carrinho</h2>}

      {cart.map(({ price, name, quantity }, index) => (
        <div className="cart-products" key={ name }>
          <div className="cart-qtd" data-testid={ `${index}-product-qtd-input` }>{ quantity }</div>
          <div className="cart-name" data-testid={ `${index}-product-name` }>{ name }</div>
          <div className="cart-total" data-testid={ `${index}-product-total-value` }>
            {`${(quantity * price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}
          </div>
          <div className="cart-price" data-testid={ `${index}-product-unit-price` }>
            { `(${price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} un)` }
            <button
              type="submit"
              value="Submit"
              data-testid={ `${index}-removal-button` }
              onClick={ () => removeItemCart(index) }
            >
              X
            </button>
          </div>
        </div>
      ))}

      <div data-testid="order-total-value">
        { `Total: ${totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}` }
      </div>

      <h2>Endereço</h2>
      <label htmlFor="street">
        Rua:
        <input
          id="street"
          name="street"
          data-testid="checkout-street-input"
          type="text"
          required
          onChange={ (e) => setNameAdress(e.target.value) }
          value={ nameAdress }
        />
      </label>
      <br />
      <label htmlFor="number">
        Número da casa:
        <input
          id="number"
          name="number"
          data-testid="checkout-house-number-input"
          type="text"
          required
          onChange={ (e) => setNumberAdress(e.target.value) }
          value={ numberAdress }
        />
      </label>
      <br />
      <button
        type="button"
        data-testid="checkout-finish-btn"
        disabled={ totalPrice <= numberZero || !nameAdress || !numberAdress }
        onClick={ () => requestApi() }
      >
        Finalizar Pedido
      </button>
      { message && <p>{message}</p>}

      { message && 
        setTimeout(() => {
          history.push('/products');
        }, time)
      }
    </>
  );
};

export default Checkout;

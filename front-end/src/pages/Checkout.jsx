import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from './Checkout.module.css';

import Menu from '../components/Menu';

import { updateTotalCheckout, updateCart } from '../actions';
import { Redirect } from 'react-router-dom';

const Checkout = ({ cart, total, updateTotal, updateProducts }) => {
  const [userLS, setUserLS] = useState(null);

  // dados para registrar a venda
  const [userId, setUserId] = useState('');
  const [price, setPrice] = useState('');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [date, setDate] = useState(
    new Date().toISOString().slice(0, 19).replace('T', ' '),
  );
  const [status, setStatus] = useState('ok');
  ///////////////////////////////////////////////////

  const [messageCart, setMessageCart] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUserLS(userData);
  }, []);

  // requisição para pegar o id do usuário no banco

  if (userLS) {
    axios
      .get('http://localhost:3001/users', {
        params: { email: userLS.email },
      })
      .then((res) => {
        setUserId(res.data[0]);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    setPrice(total);
    if (total === 0) {
      setMessageCart('Não há produtos no carrinho');
    }
  }, [total]);

  const removeProduct = (item) => {
    const totalProductValue = item.price * item.quantity;
    updateProducts(item);
    updateTotal(totalProductValue);
  };

  const registerSale = () => {
    axios
      .post('http://localhost:3001/sales', {
        userId,
        price,
        street,
        houseNumber,
        date,
        status,
      })
      .then((res) => {
        console.log(res);
        setMessageSuccess('Compra realizada com sucesso!');
        setRedirect(true);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(date);

    registerSale();
  };

  if (redirect) return <Redirect to="/products" />;

  return (
    <section className={styles.mainSection}>
      <Menu title="Finalizar Pedido" />
      <div className={styles.mainDiv}>
        <div className={styles.checkoutDiv}>
          <h2 className={styles.productTitle}>Produtos</h2>
          {messageCart && <h3>{messageCart}</h3>}
          {cart &&
            cart.map((item, index) => (
              <div className={styles.productDiv} key={item.name}>
                <p data-testid={`${index}-product-name`}>{item.name}</p>
                <p
                  data-testid={`${index}-product-unit-price`}
                >{`(R$ ${item.price.toFixed(2).replace('.', ',')} un)`}</p>
                <p data-testid={`${index}-product-qtd-input`}>
                  {item.quantity}
                </p>
                <p data-testid={`${index}-product-total-value`}>{`R$ ${(
                  item.price * item.quantity
                )
                  .toFixed(2)
                  .replace('.', ',')}`}</p>
                <button
                  type="button"
                  data-testid={`${index}-removal-button`}
                  onClick={() => removeProduct(item)}
                >
                  X
                </button>
              </div>
            ))}
          <p
            className={styles.total}
            data-testid="order-total-value"
          >{`R$ ${total.toFixed(2).replace('.', ',')}`}</p>
          <h2 className={styles.productTitle}>Endereço</h2>
          <form
            className={styles.checkoutForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <label htmlFor="street">Rua:</label>
            <input
              type="text"
              name="street"
              id="street"
              data-testid="checkout-street-input"
              onChange={(e) => setStreet(e.target.value)}
            />

            <br />
            <label htmlFor="number">Número da casa:</label>
            <input
              type="text"
              name="number"
              id="number"
              data-testid="checkout-house-number-input"
              onChange={(e) => setHouseNumber(e.target.value)}
            />

            <br />
            <button
              type="submit"
              data-testid="checkout-finish-btn"
              disabled={!street || !houseNumber || !price}
            >
              Finalizar Pedido
            </button>
          </form>
          {messageSuccess && <h3>{messageSuccess}</h3>}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
  total: state.cartReducer.total,
});

const mapDispatchToProps = (dispatch) => ({
  updateTotal: (payload) => dispatch(updateTotalCheckout(payload)),
  updateProducts: (payload) => dispatch(updateCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

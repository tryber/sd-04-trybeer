import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from './Products.module.css';

import { incQuantity, decQuantity, saveCart } from '../actions';

import Menu from '../components/Menu';

const Products = ({ cart, increaseQtd, decreaseQtd, total, saveCartLS }) => {
  const [products, setProducts] = useState([]);

  const [userLogged, setUserLogged] = useState(false);

  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const saveCart = () => {
    const cartLS = JSON.parse(localStorage.getItem('cart')) || [];
    const totalLS = JSON.parse(localStorage.getItem('total'));

    console.log('recupera LS', cartLS);
    return cartLS ? saveCartLS(cartLS, totalLS) : null;
  };

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      return setRedirectToLogin(true);
    }

    axios
      .get('http://localhost:3001/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      setUserLogged(true);
    }
    saveCart();
  }, []);

  const quantity = (product) => {
    let qty;
    const productInCart = cart.filter((item) => item.name === product.name);

    productInCart.length ? (qty = productInCart[0].quantity) : (qty = 0);

    return qty;
  };

  useEffect(() => {
    localStorage.setItem('total', total);
  }, [total]);

  const interval = () => {
    setTimeout(() => {
      console.log('interval');
      localStorage.setItem('cart', JSON.stringify(cart));
    }, 500);
  };

  const stopDecreamet = (product) => {
    const qty = quantity(product);
    if (qty === 0 || !qty) return null;
    decreaseQtd(product);
    interval();
  };

  return (
    <section className={styles.productsSection}>
      <Menu title="TryBeer" />

      <div className={styles.productsDiv}>
        {userLogged ? <Redirect to="/login" /> : null}

        {products &&
          products.map((product, index) => (
            <div key={product.name} className={styles.productsCard}>
              <div className={styles.photo}>
                <img
                  data-testid={`${index}-product-img`}
                  alt=""
                  src={product.urlImage}
                  width="100px"
                />
              </div>
              <div className={styles.info}>
                <div className={styles.infos}>
                  <p
                    className={styles.name}
                    data-testid={`${index}-product-name`}
                  >
                    {product.name}
                  </p>
                  <p
                    className={styles.price}
                    data-testid={`${index}-product-price`}
                  >{`R$ ${product.price.toFixed(2).replace('.', ',')}`}</p>
                </div>
                <div className={styles.btns}>
                  <button
                    type="button"
                    data-testid={`${index}-product-minus`}
                    onClick={() => decreaseQtd(product)}
                  >
                    -
                  </button>
                  <p data-testid={`${index}-product-qtd`}>
                    {quantity(product)}
                  </p>
                  <button
                    type="button"
                    data-testid={`${index}-product-plus`}
                    onClick={() => increaseQtd(product)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className={styles.productsDiva}>
        {redirectToLogin && <Redirect to="/login" />}
        <Menu title="TryBeer" />
        {products &&
          products.map((product, index) => (
            <div key={product.name}>
              <p data-testid={`${index}-product-name`}>{product.name}</p>
              <p
                data-testid={`${index}-product-price`}
              >{`R$ ${product.price.toFixed(2).replace('.', ',')}`}</p>
              <img
                data-testid={`${index}-product-img`}
                alt=""
                src={product.urlImage}
                width="100px"
              />
              <button
                type="button"
                data-testid={`${index}-product-minus`}
                onClick={() => stopDecreamet(product)}
              >
                -
              </button>
              <p data-testid={`${index}-product-qtd`}>{quantity(product)}</p>
              <button
                type="button"
                data-testid={`${index}-product-plus`}
                onClick={() => {
                  increaseQtd(product);
                  interval();
                }}
              >
                +
              </button>
            </div>
          ))}
      </div>
      <div>
        <Link to="/checkout">
          <button
            className={styles.verCarrinho}
            type="button"
            data-testid="checkout-bottom-btn"
            disabled={!cart.length}
          >
            Ver Carrinho
          </button>
        </Link>
        <p
          className={styles.total}
          data-testid="checkout-bottom-btn-value"
        >{`R$ ${total.toFixed(2).replace('.', ',')}`}</p>
        <p data-testid="checkout-bottom-btn-value">
          {total === null
            ? 'R$ 0,00'
            : `R$ ${total.toFixed(2).replace('.', ',')}`}
        </p>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
  total: state.cartReducer.total,
});

const mapDispatchToProps = (dispatch) => ({
  increaseQtd: (payload) => dispatch(incQuantity(payload)),
  decreaseQtd: (payload) => dispatch(decQuantity(payload)),
  saveCartLS: (localstorage, total) => dispatch(saveCart(localstorage, total)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

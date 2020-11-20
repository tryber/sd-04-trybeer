import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import styles from './Products.module.css';

import { incQuantity, decQuantity, saveCart } from '../actions';

import Menu from '../components/Menu';

const Products = ({ cart, increaseQtd, decreaseQtd, total, saveCartLS }) => {
  const [products, setProducts] = useState([]);

  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const saveCart = () => {
    const cartLS = JSON.parse(localStorage.getItem('cart')) || [];
    const totalLS = JSON.parse(localStorage.getItem('total'));
    return cartLS ? saveCartLS(cartLS, totalLS) : null;
  };

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      return setRedirectToLogin(true);
    }

    if (localStorage.getItem('user')) {
      axios
        .get('http://localhost:3001/users', {
          params: { email: JSON.parse(localStorage.getItem('user')).email },
        })
        .then((res) => {
          localStorage.setItem('userID', res.data[0]);
        })
        .catch((error) => console.log(error));
    }

    axios
      .get('http://localhost:3001/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
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
    if (cart !== []) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, total]);

  const stopDecreamet = (product) => {
    const qty = quantity(product);
    if (qty === 0 || !qty) return null;
    decreaseQtd(product);
  };

  return (
    // <section className={styles.productsSection}>
    <section className="insideSection">
      {redirectToLogin && <Redirect to="/login" />}
      <Menu title="TryBeer" />
      <div className={styles.productsDiv}>
        {/* <div className="insideDivCol"> */}

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
                  onClick={() => stopDecreamet(product)}
                >
                  -
                </button>
                <p data-testid={`${index}-product-qtd`}>{quantity(product)}</p>
                <button
                  type="button"
                  data-testid={`${index}-product-plus`}
                  onClick={() => increaseQtd(product)}
                >
                  +
                </button>
              </div>
            </div>
            // </div>
          ))}
      </div>
      <div className={styles.productsDiva}>
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
        <p className={styles.total} data-testid="checkout-bottom-btn-value">
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

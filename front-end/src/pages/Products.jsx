import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from './Products.module.css';

import { incQuantity, decQuantity, saveCart } from '../actions';

import Menu from '../components/Menu';
// import ProductCards from '../components/ProductCards';

const Products = ({ cart, increaseQtd, decreaseQtd, total, saveCartLS }) => {
  const [products, setProducts] = useState([]);

  const [userLogged, setUserLogged] = useState(false);

  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

  const initialTotal = Number(localStorage.getItem('total')) || 0;

  const [cartLS, setCartLS] = useState(initialCart);
  const [totalLS, setTotalLS] = useState(initialTotal);

  useEffect(() => {
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
  }, []);

  const quantity = (product) => {
    let qty;
    let productInCart = cart.filter((item) => item.name === product.name);

    productInCart.length ? (qty = productInCart[0].quantity) : (qty = 0);

    return qty;
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total);
  }, [cart, total]);

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
  saveCartLS: (payload) => dispatch(saveCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

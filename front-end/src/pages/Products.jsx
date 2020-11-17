import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { incQuantity, decQuantity, saveCart } from '../actions';

import Menu from '../components/Menu';
// import ProductCards from '../components/ProductCards';

const Products = ({ cart, increaseQtd, decreaseQtd, total, saveCartLS }) => {
  const [products, setProducts] = useState([]);

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
    <div>
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
              onClick={() => decreaseQtd(product)}
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
        ))}
      <div>
        <Link to="/checkout">
          <button
            type="button"
            data-testid="checkout-bottom-btn"
            disabled={!cart.length}
          >
            Ver Carrinho
          </button>
        </Link>
        <p data-testid="checkout-bottom-btn-value">{`R$ ${total
          .toFixed(2)
          .replace('.', ',')}`}</p>
      </div>
    </div>
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

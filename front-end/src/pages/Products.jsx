import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { incQuantity, decQuantity } from '../actions';

import Menu from '../components/Menu';
// import ProductCards from '../components/ProductCards';

const Products = ({ cart, increaseQtd, decreaseQtd, total }) => {
  const [products, setProducts] = useState([]);

  const [cartLS, setCartLS] = useState([]);

  const [totalLS, setTotalLS] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));

    setTotalLS(localStorage.getItem('total'));
    setCartLS(localStorage.getItem('cart'));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total);
  }, [cart, total]);

  const quantity = (product) => {
    let qty;
    let productInCart = cart.filter((item) => item.name === product.name);

    productInCart.length > 0 ? (qty = productInCart[0].quantity) : (qty = 0);

    return qty;
  };

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
            <p type="button" data-testid={`${index}-product-qtd`}>
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
        ))}
      <div>
        <Link to="/checkout">
          <button type="button" data-testid="checkout-bottom-btn">
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

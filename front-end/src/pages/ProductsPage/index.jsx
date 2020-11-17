import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import Card from '../../components/Card';
import Menu from '../../components/Menu';
import './index.css';

import { getLS } from '../../utils';
import { Link, Redirect } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [login, setLogin] = useState(true);

  useEffect(() => {
    (async () => {
      const products = await api.productsAPI();
      const { token } = getLS('user') || {};
      if (!token) setLogin(false);
      setData(products);
    })();
  }, []);

  const cartLocalStorage = cart => {
    if (!cart) return 0;
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    return total;
  };

  const cart = getLS('cart') || [];

  if (!login) {
    return <Redirect to='/login' />;
  }
  return (
    <>
      <Menu nomeTela="TryBeer" />
      <div className="container-general container-cards">
        {data.map(({ urlImage, name, price }, index) => (
          <Card index={index} img={urlImage} title={name} price={price} />
        ))}
      </div>
      <footer className="footer-cart">
        <span data-testid="checkout-bottom-btn-value">
          {`Total: R$ ${cartLocalStorage(cart).toFixed(2).replace('.', ',')}`}
        </span>
        {cart.length === 0 ? (
          <button disabled type="button" data-testid="checkout-bottom-btn">
            Ver Carrinho
          </button>
        ) : (
          <button type="button" data-testid="checkout-bottom-btn">
            <Link to="/checkout">Ver Carrinho</Link>
          </button>
        )}
      </footer>
    </>
  );
};

export default Products;

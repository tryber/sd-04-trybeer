import React from 'react';
import { Link } from 'react-router-dom';
import CardProduct from './CardProduct';
import { useSelector } from 'react-redux';

export const ListProducts = ({ list }) => {
  const cart = useSelector((state) => state.cart);
  const carrinho = Object.entries({ ...list, ...cart });
  const total = Object.values(cart)
    .reduce((acc, curr) => curr.quantity * curr.price + acc, 0)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const _onClick = (e) => {
    if (e.target.innerHTML.indexOf('0,00') !== -1) return e.preventDefault();
    return false;
  };
  return (
    <div className="page-content">
      {carrinho.map((info, index) => (
        <CardProduct key={info[0]} {...info[1]} index={index} />
      ))}
      <button disabled={Object.keys(cart).length === 0} data-testid="checkout-bottom-btn">
        <Link to="/checkout" onClick={(e) => _onClick(e)}>
          <p data-testid="checkout-bottom-btn-value">{`Ver Carrinho: ${total}`}</p>
        </Link>
      </button>
    </div>
  );
};

export default ListProducts;

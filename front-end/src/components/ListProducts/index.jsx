import React from 'react';
import {Link} from 'react-router-dom';
import CardProduct from './CardProduct';
import { useSelector } from 'react-redux';

export const ListProducts = ({ list }) => {
  const cart = useSelector((state) => state.cart);
  const carrinho = Object.entries({ ...list, ...cart });
  const total = Object.values(cart).reduce(
    (acc, curr) => curr.quantity * curr.price + acc,
    0
  ).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  return (
    <div>
      {carrinho.map((info, index) => (
        <CardProduct key={info[0]} {...info[1]} index={index} />
      ))}
      <Link to="/carrinho">{`carrinho: ${total}`} </Link>
    </div>
  );
};

export default ListProducts;

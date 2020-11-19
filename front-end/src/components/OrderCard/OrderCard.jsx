import React from 'react';
import { Link } from 'react-router-dom';
import './OrderCard.css';

const OrderCard = ({ id, totalPrice, saleDate, index }) => {
  console.log('index', index)
  return (
    <Link to={ `/orders/${id}` } key={ `order-${index}` } className="cart-item" >
      <div data-testid={ `${index}-order-card-container` }>
      <div className="cart-item-right-container">
        <h3 data-testid={ `${index}-order-number`} className="pedido" >
          {`Pedido ${index + 1}`}
        </h3>
        <h4 className="unitary-price" data-testid={ `${index}-order-total-value` }>
          {`${Number(totalPrice).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}`}</h4>
      </div>
        <h4 className="cart-item-left-container" data-testid={ `${index}-order-date` }>{new Date(saleDate).toLocaleDateString('pt-BR')}</h4>
      </div>
    </Link>
  );
};

export default OrderCard;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const OrderCard = ({ id, totalPrice, saleDate, index }) => {
  console.log('index', index)
  return (
    <Link className={styles.cartItem} to={ `/orders/${id}` } key={ `order-${index}` }>
      <div data-testid={ `${index}-order-card-container` }>
      <div className={styles.cartItemRightContainer}>
        <h3 className="pedido" data-testid={ `${index}-order-number`}>
          {`Pedido ${index + 1}`}
        </h3>
        <h4 className="unitary-price" data-testid={ `${index}-order-total-value` }>
          {`${Number(totalPrice).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}`}</h4>
      </div>
        <h4 className={styles.cartItemLeftContainer} data-testid={ `${index}-order-date` }>{new Date(saleDate).toLocaleDateString('pt-BR')}</h4>
      </div>
    </Link>
  );
};

export default OrderCard;

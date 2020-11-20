import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const OrderCard = ({ id, totalPrice, saleDate, index }) => {
  console.log('index', index)
  return (
    <Link to={ `/orders/${id}` } key={ `order-${index}` } className={styles.cartItem} >
      <div className={styles.cartItemContainer} data-testid={ `${index}-order-card-container` }>
      <div className={styles.cartItemRightContainer}>
        <h3 data-testid={ `${index}-order-number`} className={styles.order} >
          {`Pedido ${index + 1}`}
        </h3>
        <h4 className="unitary-price" data-testid={ `${index}-order-total-value` }>
          {`${Number(totalPrice).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}`}</h4>
      </div>
      <div className={styles.cartItemLeftContainer}>
        <h4  data-testid={ `${index}-order-date` }>{new Date(saleDate).toLocaleDateString('pt-BR')}</h4>
      </div>
      </div>
    </Link>
  );
};

export default OrderCard;

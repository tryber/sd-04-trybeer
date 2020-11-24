import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../store/ducks/orders';

import { Link } from 'react-router-dom';

import './ClientOrdersCards.css'

const ClientOrdersCards = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.ordersReducer.orders);
  const { session } = useSelector(
    (state) => state.userReducer,
  );

  // Fetch all orders at first render
  useEffect(() => {
    dispatch(getOrders(session.token));
  }, []);

  // call orders and fetch confirmation from redux
  const { orders, getOrderSuccess } = useSelector((state) => state.ordersReducer);
  let newDate = '';
  let dateAndMonth = '';
  return (
    <>
      {
        getOrderSuccess && orders.map((order, i) => (
          newDate = new Date(order.date),
          dateAndMonth = `${newDate.getDate()}/${newDate.getMonth() + 1}`,
          (<Link to={`orders/${order.id}`} >
            <div className='cardContainer' data-testid={`${i}-order-card-container`}>
              <h3 data-testid={`${i}-order-number`} >Pedido {order.id}</h3>
              <h3 data-testid={`${i}-order-date`}>{
                dateAndMonth
              }</h3>
              <h3 data-testid={`${i}-order-total-value`}>R$ {order.total.toFixed(2).toString().replace('.', ',')}</h3>
            </div>
          </Link>)
        )
        )
      }
    </>
  );
}

export default ClientOrdersCards;

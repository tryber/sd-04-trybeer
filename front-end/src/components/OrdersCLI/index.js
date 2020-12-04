import React, { useEffect, useState } from 'react';
import moment from 'moment';
import API from '../../services/api';
import Header from '../Header';
import SideBar from '../SideBarCLI';

const OrderDetailsCLI = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    API.getOrders(token).then((result) => setOrders(result.data));
  }, []);
  return (
    <div>
      <Header title="Cliente - Meus Pedidos" />
      <SideBar />
      <div className="card" style={ { width: 200 } }>
        <ul className="list-group list-group-flush">
          {orders.map((order) => (
            <li data-testid={ `${order[0] - 1}-order-card-container` } key={ order[0] } className="list-group-item">
              <a href={`/orders/${order[0]}`}>
                <h5 data-testid={ `${order[0] - 1}-order-number` } className="card-title">{`Pedido ${order[0]}`}</h5>
                <p data-testid={ `${order[0] - 1}-order-date` }>{moment(order[5]).format('MM/DD')}</p>
                <p data-testid={ `${order[0] - 1}-order-total-value` }>
                  {order[2].toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderDetailsCLI;

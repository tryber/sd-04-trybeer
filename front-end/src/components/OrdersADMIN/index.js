import React, { useEffect, useState, useContext } from 'react';
import { TrybeerContext } from '../../context/index';
import API from '../../services/api';
import Header from '../Header';
import SideBar from '../SideBarADMIN';

const Orders = () => {
  const { status, setSideBar } = useContext(TrybeerContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    API.getOrders(token).then((result) => setOrders(result.data));
  }, []);
  return (
    <div>
      <Header title="Admin - Pedidos" />
      <div role="button" tabIndex="0" onKeyDown="nothing" onClick={ () => setSideBar(false) }>
        <SideBar pageWrapId="page-wrap" outerContainerId="outer-container" />
      </div>
      <h5>Pedidos</h5>
      <div className="card text-center" style={ { width: 800 } }>
        <ul className="list-group list-group-flush">
          {orders.map((order) => (
            <li data-testid={ `${order[0] - 1}-order-card-container` } key={ order[0] } className="list-group-item">
              <a href={ `/admin/orders/${order[0]}` } onClick={ () => localStorage.setItem('status', JSON.stringify(order[6])) }>
                <h5 data-testid={ `${order[0] - 1}-order-number` } className="card-title">{`Pedido ${order[0]}`}</h5>
                <p data-testid={ `${order[0] - 1}-order-address` }>{`rua ${order[3]}, ${order[4]}`}</p>
                <p data-testid={ `${order[0] - 1}-order-total-value` }>
                  {order[2].toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
                <p data-testid={ `${order[0] - 1}-order-status` }>{status}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;

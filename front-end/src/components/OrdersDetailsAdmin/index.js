import React, { useEffect, useState, useContext } from 'react';
import { TrybeerContext } from '../../context/index';
import API from '../../services/api';
import Header from '../Header';
import SideBar from '../SideBarADMIN';

const oneThousand = 1000;

const OrdersDetailsAdmin = () => {
  const { setSideBar, status, setStatus } = useContext(TrybeerContext);
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = window.location.href;
    const orderId = url.substring(url.lastIndexOf('/') + 1);
    const { token } = JSON.parse(localStorage.getItem('user'));
    API.OById(token, orderId).then((res) => ((
      setProducts(res.data[0]),
      setItems(res.data)
    )));
  }, []);

  useEffect(() => {
    setStatus(JSON.parse(localStorage.getItem('status')));
    setSideBar(false);
    setTimeout(() => {
      setSideBar(true);
    }, oneThousand);
  }, [setSideBar, setStatus]);
  return (
    <div>
      <Header title={ `Admin - Detalhes de Pedido - ${status}` } />
      <div role="button" tabIndex="0" onKeyDown="nothing" onClick={ () => setSideBar(false) }>
        <SideBar pageWrapId="page-wrap" outerContainerId="outer-container" />
      </div>
      <h5 data-testid="order-number" className="card-title">
        {`Pedido ${products[0]}`}
      </h5>
      <h6 data-testid="order-status" className="card-subtitle mb-2 text-muted">
        {status}
      </h6>
      <div className="card" style={ { width: 200 } }>
        <ul className="list-group list-group-flush">
          {items.slice(1).map((item) => (

            <li key={ item[1] } className="list-group-item">
              <span data-testid="0-product-qtd">{item[2]}</span>
              <span data-testid="0-product-name">{item[4]}</span>
              <span data-testid="0-product-total-value">
                {(item[5] * item[2]).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
              <span data-testid="0-order-unit-price">
                {`(${item[5].toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })})`}
              </span>
            </li>
          ))}
        </ul>
        <h5 data-testid="order-total-value" className="card-title">
          { products[2] && `Total: ${products[2].toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}`}
        </h5>
      </div>
      { status === 'Pendentes' && <button data-testid="mark-as-delivered-btn" type="button" onClick={ () => setStatus('Entregue') }>Marcar como entregue</button>}
    </div>
  );
};

export default OrdersDetailsAdmin;

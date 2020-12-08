import React, { useEffect, useState } from 'react';
// import { TrybeerContext } from '../../context/index';
import moment from 'moment';
import API from '../../services/api';
import Header from '../Header';
import SideBar from '../SideBarCLI';

const OrdersCli = () => {
  // const { products, setProductsCtx } = useContext(TrybeerContext);
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    // console.log(products)
    const url = window.location.href;
    const orderId = url.substring(url.lastIndexOf('/') + 1);
    const { token } = JSON.parse(localStorage.getItem('user'));
    API.OById(token, orderId).then((res) => ((
      setProducts(res.data[0]),
      setItems(res.data)
    )));
  }, []);

  return (
    <div>
      <Header title="Cliente - Detalhes do Pedido" />
      <SideBar />
      <h5 data-testid="order-number" className="card-title">
        {`Pedido ${products[0]}`}
      </h5>
      <h6 data-testid="order-date" className="card-subtitle mb-2 text-muted">
        {moment(products[5]).format('MM/DD')}
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
    </div>
  );
};

export default OrdersCli;

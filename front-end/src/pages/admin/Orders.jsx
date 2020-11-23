import React from 'react';
import SideBar from '../../components/ClientBar.jsx';
import CardOrders from '../../components/CardAdmOrders.jsx';
import './CSS/Orders.css';

const Orders = () => {
  const loginInStorage = JSON.parse(localStorage.getItem('cart'));
  let orderCount = 0;

  return (
    <div className="bodyAdm">
      <SideBar title={'TryBeer'} isAdm={true} />
      <div className="orders-container">
        <h2 className="pedidos-text">Pedidos</h2>
        <div>
          {loginInStorage.map((order) => {
            orderCount += 1;
            const { price, quantity } = order;
            const totalPrice = parseFloat(price) * parseFloat(quantity);
            return (
              <CardOrders
                order={orderCount}
                address={'Rua da pinga, 2'}
                price={totalPrice}
                status={'Pendente'}
                key={`${orderCount}order`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;

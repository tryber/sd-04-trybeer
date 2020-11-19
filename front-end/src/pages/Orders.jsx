import React, { useContext } from 'react';
import TopBar from '../components/ClientBar.jsx';
import { AppContext } from '../context/AppContext.jsx';
import MyOrdersCard from '../components/MyOrdersCard';

const Orders = () => {
  const { orders, setOrders } = useContext(AppContext);
  return (
  <div>
    <TopBar title={'Meus Pedidos'} isAdm={false} />
    {orders.map((order) => 
      <MyOrdersCard 
        orderId={order.orderId}
        orderDate={order.orderDate}  
        orderPriceSum={order.orderPriceSum} 
      />)}
  </div>
  );
  }

export default Orders;
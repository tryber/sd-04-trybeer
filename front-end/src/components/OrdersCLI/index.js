import React, { useEffect, useState } from 'react';
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
      <Header title="Cliente - Detalhes do Pedido" />
      <SideBar />
      {console.log(orders)}
    </div>
  );
};

export default OrderDetailsCLI;

import React, { useEffect, useState } from 'react';
import Header from '../Header';
import SideBar from '../SideBarADMIN';

const OrdersDetailsAdmin = () => {
  const [status, setStatus] = useState();
  useEffect(() => {
    setStatus(JSON.parse(localStorage.getItem('status')));
  }, []);
  return (
    <div>
      <Header title={ `Admin - Detalhes de Pedido - ${status}` } />
      <SideBar pageWrapId="page-wrap" outerContainerId="outer-container" />
    </div>
  );
};

export default OrdersDetailsAdmin;

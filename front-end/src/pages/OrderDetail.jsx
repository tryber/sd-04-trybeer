import React from 'react';
// import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import SalesDetails from '../components/SalesDetails';


function OrderDetail() {
  // const { id } = useParams();
  return (
    <React.Fragment>
      <Header>Detalhes de pedido</Header>
      <span>Pedido 0001 - 26/01</span>
      <SalesDetails />
    </React.Fragment>
  );
}

export default OrderDetail;

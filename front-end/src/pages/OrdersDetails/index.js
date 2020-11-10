import React from 'react';
import { useParams } from 'react-router-dom';

const OrdersDetails = () => {
  const { id } = useParams();
  return (
    <p>
      This is the orders
      {' '}
      {id}
      {' '}
      details page
    </p>
  );
};
export default OrdersDetails;

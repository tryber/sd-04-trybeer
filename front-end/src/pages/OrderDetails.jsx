import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Menu from '../components/Menu';

const OrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/details', {
        params: { saleId: window.location.pathname.slice(8) },
      })
      .then((res) => {
        setOrderDetails(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Menu title="Detalhes de Pedido" />
    </div>
  );
};

export default connect(null, null)(OrderDetails);

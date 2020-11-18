import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Menu from '../components/Menu';

const OrderDetails = () => {
  return (
    <div>
      <Menu title="Detalhes de Pedido" />
    </div>
  );
};

export default connect(null, null)(OrderDetails);

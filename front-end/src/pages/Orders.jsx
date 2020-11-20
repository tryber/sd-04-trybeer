import React, { useContext } from 'react';
import TopBar from '../components/ClientBar.jsx';
import { AppContext } from '../context/AppContext.jsx';

const Orders = () => {
  const { orderMessage } = useContext(AppContext);
  return (
    <div>
      <TopBar title={'Meus Pedidos'} isAdm={false} />
    </div>
  );
};

export default Orders;

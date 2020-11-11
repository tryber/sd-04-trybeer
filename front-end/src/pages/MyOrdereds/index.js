import React from 'react';

import OrderedsCard from '../../components/OderedsCard';

import './styles.css';

const MyOrdereds = () => {
  return (
    <div className="ordereds-container">
      <div>Aqui vai um header...</div>
      {/* Rodar um map() depois */}
      <OrderedsCard />
    </div>
  );
};

export default MyOrdereds;

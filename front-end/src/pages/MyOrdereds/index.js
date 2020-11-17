import React from 'react';

import OrderedsCard from '../../components/OderedsCard';

import './styles.css';

const MyOrdereds = () => (
  <div className="ordereds-container">
    <div>Aqui vai um header...</div>
    {/* Rodar um map() depois */}
    <OrderedsCard testid={ 1 } />
  </div>
);

export default MyOrdereds;

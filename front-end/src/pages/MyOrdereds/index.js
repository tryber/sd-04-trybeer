import React from 'react';

import Header from '../../components/Header';
// import OrderedsCard from '../../components/OderedsCard';

import './styles.css';

const MyOrdereds = () => (
  <div className="ordereds-container">
    <Header />
    {/* Rodar um map() depois */}
    <div className="ordereds-card-container">
      {/* { <OrderedsCard testid={ 1 } /> } */}
    </div>
  </div>
);

export default MyOrdereds;

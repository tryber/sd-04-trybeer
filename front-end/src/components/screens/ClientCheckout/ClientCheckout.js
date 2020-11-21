import React from 'react';
import Header from '../../Header';
import SideBar from '../../SideBar/index'

// Componente genérico para auxiliar nos testes do req 5, sintam-se
// livres para substituí-lo
const ClientCheckout = () => (
  <div>
    <Header title="Checkout" />
    <SideBar userType="client"/>
  </div>
);

export default ClientCheckout;

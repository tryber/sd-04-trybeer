import React from 'react';

import Header from '../Header';
import SideBar from '../SideBarCLI';

const Products = () => {
  return (
    <div>
      <Header />
      <SideBar data-testid="top-hamburguer"/>
    </div>
  );
};

export default Products;

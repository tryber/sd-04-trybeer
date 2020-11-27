import React from 'react';

import Header from '../Header';
import SideBar from '../SideBarCLI';

const Products = () => (
  <div>
    <Header />
    <SideBar data-testid="top-hamburguer" />
  </div>
);

export default Products;

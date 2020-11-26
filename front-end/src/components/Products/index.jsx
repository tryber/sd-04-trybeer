import React from 'react';
import { useEffect } from 'react';

import Header from '../Header';
import SideBar from '../SideBarCLI';

const Products = (loc) => {
  
  return (
    <div>
      <Header title="TryBeer" />
      <SideBar />
    </div>
  );
};

export default Products;

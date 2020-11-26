import React from 'react';

import Header from '../Header';
import SideBar from '../SideBarADMIN';

const Orders = () => {
  return (
    <div>
      <Header />
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    </div>
  );
};

export default Orders;

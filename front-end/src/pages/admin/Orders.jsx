import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import SideBar from '../../components/ClientBar.jsx';

const Orders = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  });

  return <SideBar title={'TryBeer'} isAdm={true} />;
};

export default Orders;

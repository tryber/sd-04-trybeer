import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../../services/api';
import ADMOrdersCards from '../../components/ADMOrdersCards';

// import OrderedsCard from '../../components/OderedsCard';
import SideMenuAdmin from '../../components/SideMenuAdmin';

import './styles.css';

const MyOrdersADM = () => {
const [adminOrders, setAdminOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const response = await api.get('/admin/orders');
      setAdminOrders(response.data);
      console.log(response.data);
    };
    getOrders();
  }, []);

  // if () return <Redirect to "/login">;

  return (
    <article className="ordereds-container">
      <aside className="side-menu-container">
        <SideMenuAdmin />
      </aside>
      <section className="admin-orders-loader">
        {adminOrders && adminOrders.map((order, index) => (<ADMOrdersCards key={order.id} orders={order} testid={index} />))}
        {/* <OrderedsCard testid={ 1 } /> */}
      </section>
    </article>
  )
};

export default MyOrdersADM;

import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../../services/api';

// import OrderedsCard from '../../components/OderedsCard';
import SideMenuAdmin from '../../components/SideMenuAdmin';

import './styles.css';

const MyOrdersADM = () => {
  useEffect(() => {
    const getOrders = async () => {
      const { id } = JSON.parse(localStorage.getItem('user'));
      const response = await api.get('/admin/orders', { id, teste: 'abcfuncionou' });
      console.log('response', response)
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
        {/* Rodar um map() depois */}
        {/* <OrderedsCard testid={ 1 } /> */}
      </section>
    </article>
  )
};

export default MyOrdersADM;

import React from 'react';

import OrderedsCard from '../../components/OderedsCard';
import SideMenuAdmin from '../../components/SideMenuAdmin';

import './styles.css';

const MyOrdereds = () => (
  <article className="ordereds-container">
    <aside className="side-menu-container">
      <SideMenuAdmin />
    </aside>
    <section className="admin-orders-loader">
      {/* Rodar um map() depois */}
      <OrderedsCard testid={ 1 } />
    </section>
  </article>
);

export default MyOrdereds;

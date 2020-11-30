import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminTopMenu from '../Components/Menu/admin/AdminTopMenu';
import api from '../services/orderApi';

const AdminOrders = () => {
  const [sales, setSales] = useState();

  useEffect(() => {
    api.getAdminSales().then((res) => setSales(res.data));
  }, []);

  return (
    <div>
      <AdminTopMenu title="Admin - Pedidos" />
      <div className="mt-5">
        <h1>Pedidos</h1>
        {sales && sales.map((sale, index) => (
          <div key={ sale.id }>
            <Link to={ `/admin/orders/${sale.id}` }>
              <h2 data-testid={ `${index}-order-number` }>{ `Pedido ${sale.id}` }</h2>
              <p data-testid={ `${index}-order-address` }>{ `${sale.delivery_address}, ${sale.delivery_number}` }</p>
              <p data-testid={ `${index}-order-total-value` }>{ `R$ ${sale.total_price}` }</p>
              <p data-testid={ `${index}-order-status` }>{ sale.status }</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;

import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { getUserSales } from '../services/TrybeerApi';
import ListSales from '../components/ListSales';

export default function Orders() {
  const [sales, setSales] = useState([]);
  const { email } = JSON.parse(localStorage.getItem('user') || '{}');
  useEffect(() => {
    getUserSales(email).then(({ data }) => setSales(data));
  }, []);
  return (
    <div className="page">
      <Header>Meus Pedidos</Header>
      <div className="page-content">
        {sales &&
          sales.map((result, index) => (
            <ListSales {...result} index={index} key={index} />
          ))}
      </div>
    </div>
  );
}

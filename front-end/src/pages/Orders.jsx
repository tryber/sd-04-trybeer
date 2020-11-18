import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { getSales } from '../services/TrybeerApi';
import ListSales from '../components/ListSales';

export default function Orders() {
  const [sales, setSales] = useState([]);
  const { email } = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    getSales(email).then(({ data }) => setSales(data));
  }, []);
  return (
    <div>
      <Header>Meus pedidos</Header>
      {sales && sales.map((result, index)=> <ListSales {...result} index={index} key={index}/>)}
    </div>
  );
}

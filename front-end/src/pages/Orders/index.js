import React, { useState, useEffect } from 'react';
import {
  Flex,
  Text,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import MenuClient from '../../components/MenuClient';
import MenuAdmin from '../../components/MenuAdmin';
import OrderCard from '../../components/OrderCard';
import { getOrders } from '../../api';

// Requisito 7 - Criar Tela de Meus Pedidos
/*
Banco de Dados
table: sales
columns:
  id, user_id, total_price, sale_date, delivery_number

A busca no banco de dados precisa ser feita pelo user_id
*/
// 1 - top-title -> alterar no MenuClient/Header
// para ter um context para o title

// - Pegar o id do usuário (user_id) para acessar seus pedidos
//   (salesByUserId? no BACKEND)

const Orders = () => {
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const user = localStorage.getItem('user') || null;
  if (user) {
    const { userId, role } = jwtDecode(user);
  }
  
  
  useEffect(() => {
    // Verifica se o usuário está logado
    if (!user) {
      history.push('/login');
    }

    // Pegando os pedidos do banco de dados
    getOrders(userId)
      .then((response) => {
        setOrders(response.data);
      })
      .catch(() => 'um erro ocorreu');

  }, [history, orders]);
  // console.log('Orders: ', orders);

  return (
    <div>
      {role ? <MenuClient /> : <MenuAdmin />}
      <Text data-testid="top-title">Meus Pedidos</Text>
      <Flex direction="column">
        {orders ? orders.map((e) =>
          <OrderCard data={ e } userRole={role} key={ e.id } />
        ) : <Text>Loading...</Text>}
      </Flex>
    </div>
  );
};

export default Orders;

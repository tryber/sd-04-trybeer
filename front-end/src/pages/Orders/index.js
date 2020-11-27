import React, { useState, useEffect } from 'react';
import {
  Flex,
  Text,
} from '@chakra-ui/react';
import MenuClient from '../../components/MenuClient';
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

/*
  - Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela Login.
    1. Verificar se tem usuário pelo LocalStorage ou Token?
*/

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Pegando os pedidos do banco de dados
    getOrders()
      .then((response) => {
        // console.log('Response: ', response);
        setOrders(response.data);
      })
      .catch(() => 'um erro ocorreu');

  }, []);
  // console.log('Orders: ', orders);

  return (
    <div>
      <MenuClient />
      <Text data-testid="top-title">Meus Pedidos</Text>
      <Flex direction="column">
        {orders ? orders.map((e) =>
          <OrderCard data={ e } key={ e.id } />
        ) : <Text>Loading...</Text>}
      </Flex>
    </div>
  );
};

export default Orders;

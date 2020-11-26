import React from 'react';
import {
  Flex,
  Text,
} from '@chakra-ui/react';
import MenuClient from '../../components/MenuClient';
import OrderCard from '../../components/OrderCard';

// Requisito 7 - Criar Tela de Meus Pedidos
/*
Banco de Dados
table: sales
columns:
  id, user_id, total_price, sale_date, delivery_number
*/
// 1 - top-title -> alterar no MenuClient/Header parar receber uma props.title
// 2 - fazer o mock do Order para testar a tela

const Orders = () => (
  <div>
    <MenuClient />
    <Text data-testid="top-title">Meus Pedidos</Text>
    <Flex direction="column">
      <OrderCard />
    </Flex>
  </div>
);
export default Orders;

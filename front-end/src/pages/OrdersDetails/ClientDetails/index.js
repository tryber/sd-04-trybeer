import React, { useContext, useEffect } from 'react';
import {
  Flex, Text, Box, Container,
} from '@chakra-ui/react';
// import { useHistory } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
import MenuClient from '../../../components/MenuClient';
// import OrderCard from '../../../components/OrderCard';
// import { getOrders } from '../../../api';
import { ProductContext } from '../../../context';

// Requisito 7 - Criar Tela de Meus Pedidos

/* Quando o link é acessado diretamente, os dados não são setados no context */

const ClientDetails = () => {
  const {
    details,
  } = useContext(ProductContext);
  const { id, saleDate, totalPrice } = details;
  const sliceOne = 5;
  const sliceTwo = 10;
  const formatDate = saleDate.slice(sliceOne, sliceTwo);
  useEffect(() => {
    console.log(details);
  });

  return (
    <>
      <MenuClient header="Meus Pedidos" />
      <Flex direction="column">
        {details ? (
          <Container>
            <Flex fontWeight="bold" justify="space-between">
              <Box data-testid="order-number">
                Pedido
                {id}
              </Box>
              <Box data-testid="order-date">
                {formatDate.split('-')[1]}
                /
                {formatDate.split('-')[0]}
              </Box>
            </Flex>
            <Box>
              Items
              <Text data-testid="0-product-qtd">Quantidade</Text>
              <Text data-testid="0-product-name">Nome do produto</Text>
              <Text data-testid="0-product-total-value">Valor Total</Text>
            </Box>
            <Box fontWeight="bold" data-testid="order-total-value">
              Total:
              {' '}
              {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}
            </Box>
          </Container>
        ) : (
          <Text>Loading...</Text>
        )}
      </Flex>
    </>
  );
};

export default ClientDetails;

import React, { useContext, useEffect } from 'react';
import {
  Flex, Text, Box, Container, Button,
} from '@chakra-ui/react';
// import { useHistory } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
import MenuAdmin from '../../../components/MenuAdmin';
import { ProductContext } from '../../../context';

const AdminDetails = () => {
  const {
    details,
  } = useContext(ProductContext);
  const {
    id, saleDate, totalPrice, status,
  } = details;
  const sliceOne = 5;
  const sliceTwo = 10;
  const formatDate = saleDate.slice(sliceOne, sliceTwo);
  useEffect(() => {
    console.log(details);
  });

  return (
    <Flex direction="row" h="100vh">
      <MenuAdmin />
      {details ? (
        <Container>
          <Flex fontWeight="bold" justify="space-between">
            <Box data-testid="order-number">
              Pedido
              {id}
            </Box>
            <Box data-testid="order-status">
              Status
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
            <Text data-testid="0-order-unit-price">Preço unitário do produto</Text>
            <Text data-testid="0-product-total-value">Valor Total</Text>
          </Box>
          <Box fontWeight="bold" data-testid="order-total-value">
            Total:
            {' '}
            {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}
          </Box>
          {/*
            - Caso o status do pedido seja pendente, um botão para marcar o
            pedido como entregue deve ser exibido. Caso contrário, não exiba o botão
            - Ao clicar no botão "Marcar pedido como entregue",
            o status desse pedido deve mudar para Entregue e o botão deve desaparecer.
          */}
          {status === 'Pendente' ? (
            <Button
              data-testid="mark-as-delivered-btn"
              onClick="Entregue"
            >
              Marcar como entregue
            </Button>
          ) : (<div />)}
        </Container>
      ) : (
        <Text>Loading...</Text>
      )}
    </Flex>
  );
};

/* useEffect(() => {
    const user = localStorage.user || null;

    // Pegando os pedidos do banco de dados
    setRole(jwtDecode(user).role);
    getAllSales()
      .then((response) => {
        setOrders(response.data);
      })
      .catch(() => 'um erro ocorreu');
  }, [history]); */

export default AdminDetails;

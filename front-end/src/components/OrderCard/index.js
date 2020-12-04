import React from 'react';
import {
  Button,
  Container,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';

/*
Banco de Dados
table: sales
columns:
  id, user_id, total_price, sale_date, delivery_number

No componente
id, totalPrice, saleDate,
*/

const OrderCard = ({ order, userRole }) => {
  const history = useHistory();
  const {
    id, saleDate, deliveryAddress, deliveryNumber, status, totalPrice,
  } = order;
  const formatDate = saleDate.slice(5, 10);

  return (
    <Button
      border="1px solid black"
      borderRadius="5px"
      mb={ 2 }
      maxWidth="60ch"
      type="button"
      onClick={ () => {
        userRole === 'client'
          ? history.push(`/orders/${id}`)
          : history.push(`/admin/orders/${id}`);
      } }
    >
      <Container>
        <Flex
          direction="column"
          data-testid={ `${id - 1}-order-card-container` }
        >
          <Flex>
            <Text
              fontWeight="bold"
              data-testid={ `${id - 1}-order-number` }
            >
              Pedido
              {' '}
              { id }
            </Text>
            <Spacer />
            {userRole === 'client' ? (
              <Text data-testid={ `${id - 1}-order-date` }>
                {formatDate.split('-')[1]}
                /
                {formatDate.split('-')[0]}
              </Text>
            ) : (
              <>
                <Text data-testid={ `${id - 1}-order-address` }>
                  {`${deliveryAddress}, ${deliveryNumber}`}
                </Text>
                <Text data-testid={ `${id - 1}-order-status` }>
                  {status}
                </Text>
              </>
            )}
          </Flex>
          <Text
            fontWeight="bold"
            data-testid={ `${id - 1}-order-total-value` }
          >
            {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}
          </Text>
        </Flex>
      </Container>
    </Button>
  );
};

export default OrderCard;

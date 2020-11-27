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

const OrderCard = (data) => {
  const history = useHistory();
  const { id, saleDate, totalPrice } = data.data;

  return (
    <Button
      border="1px solid black"
      borderRadius="5px"
      mb={ 2 }
      maxWidth="60ch"
      type="button"
      onClick={ () => {
        history.push(`/orders/${id}`);
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
              Pedido { id }
            </Text>
            <Spacer />
            <Text data-testid={ `${id - 1}-order-date"` }>{saleDate}</Text>
          </Flex>
          <Text
            fontWeight="bold"
            data-testid={ `${id - 1}-order-total-value"` }
          >
            R$ {totalPrice}
          </Text>
        </Flex>
      </Container>
    </Button>
  );
};

export default OrderCard;

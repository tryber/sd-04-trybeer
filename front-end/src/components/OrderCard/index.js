import React from 'react';
// import PropTypes from 'prop-types';
import {
  Container,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react';

/*
Banco de Dados
table: sales
columns:
  id, user_id, total_price, sale_date, delivery_number
*/

const OrderCard = (props) => {
  const { id } = props;
  return (
    <Container border="1px solid black" borderRadius="5px">
      <Flex
        direction="column"
        data-testid={ `${id - 1}-order-card-container` }
      >
        <Flex>
          <Text
            fontWeight="bold"
            data-testid={ `${id - 1}-order-number` }
          >
            Pedido 000
          </Text>
          <Spacer />
          <Text data-testid={ `${id - 1}-order-date"` }>Dia/Mês</Text>
        </Flex>
        <Text
          fontWeight="bold"
          data-testid={ `${ id - 1}-order-total-value"` }
        >
          R$ 0,00
        </Text>
      </Flex>
    </Container>
  );
};

/*
OrderCard.propTypes = {
}
*/

export default OrderCard;

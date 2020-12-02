import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import api from '../../../services/api';
import { getLS } from '../../../helpers';

const ClientOrderDetails = ({ match: { params: { id } } }) => {
  const [, setOrder] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        if (!getLS('user')) return history.push('/login');

        const userData = getLS('user');
        const { token } = userData;

        const newOrder = await api.getOrderById(token, id);

        setOrder(newOrder);
      } catch (e) {
        // console.log({ error: e.message });
      }

      return true;
    })();
  }, [history, id]);

  return (
    <h1>Order details</h1>
  );
};

ClientOrderDetails.propTypes = {
  match: propTypes.objectOf(propTypes.string).isRequired,
};

export default ClientOrderDetails;

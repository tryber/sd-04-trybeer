import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getLS } from '../../../helpers';

export default () => {
  const history = useHistory();

  useEffect(() => {
    if (!getLS('user')) return history.push('/login');

    return true;
  }, [history]);

  return (
    <h1>Order details</h1>
  );
};

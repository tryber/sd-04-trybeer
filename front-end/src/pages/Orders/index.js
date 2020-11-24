import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import SalesTable from '../../components/SalesTable/SalesTable';
import { getSales } from '../../store/ducks/sales';

const Orders = () => {
  const { token } = useSelector((state) => state.userReducer.session);
  const { sales, isFetching } = useSelector((state) => state.salesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSales(token));
  }, []);

  if (isFetching) return <h2>Carregando...</h2>;

  return (
    <div>
      <Header />
      {sales.pending.length ? (
        <section style={ { display: 'flex', flexFlow: 'column' } }>
          <header>
            <h2>Pendentes</h2>
          </header>
          <SalesTable sales={ sales.pending } />
        </section>
      ) : null}
      {sales.delivered.length ? (
        <section style={ { display: 'flex', flexFlow: 'column' } }>
          <header>
            <h2>Entregues</h2>
          </header>
          <SalesTable sales={ sales.delivered } />
        </section>
      ) : null}
    </div>
  );
};

export default Orders;

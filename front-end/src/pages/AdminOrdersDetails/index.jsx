import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import Menu from '../../components/AdminMenu';
import styles from './index.module.css';

const AdminOrdersDetails = () => {
  const [orderData, setOrderData] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    (async () => {
      const order = await api.getSaleByIdAPI(id);
      setOrderData(order.data);
    })();
  }, [id]);

  React.useEffect(() => {
    console.log(orderData);
  }, [orderData]);

  return (
    <div className={styles.pageContainer}>
      <Menu />

      {!orderData ? (
        <h2>Carregando...</h2>
      ) : (
        <section className={styles.orderDetails}>
          <h2>{`Pedido ${id} - ${
            orderData.status === 'pending' ? 'Pendente' : 'Entregue'
          }`}</h2>
          <div className={styles.productsContainer}></div>
          <h2>{`Total: ${orderData.totalPrice.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}`}</h2>
          <button type="button" className="buttonMain">
            Marcar como entregue
          </button>
        </section>
      )}
    </div>
  );
};

export default AdminOrdersDetails;

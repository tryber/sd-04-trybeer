import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { useParams } from 'react-router-dom';
import { getSalesById, sendPutStatus } from '../services/TrybeerApi';
import '../css/adminOrderDetails.css';

const AdminOrderDetails = () => {
  const { id } = useParams();
  const [saleInfo, setSaleInfo] = useState({ total_price: 0 });
  const [saleProduct, setSaleProduct] = useState([]);
  const [saleStatus, setSaleStatus] = useState();
  const { total_price } = saleInfo;

  const sendRequest = async () => await getSalesById(id);

  useEffect(() => {
    sendRequest().then((result) => {
      setSaleInfo(result.data.sale);
      setSaleStatus(result.data.sale.status);
      setSaleProduct(result.data.products);
    });
  }, [setSaleStatus]);

  return (
    <>
      <Header>Trybeer</Header>
      <div className="marginDetails">
        <div className="cardDetails">
          <div className="pedido">
            <span
              class="titleOne"
              data-testid="order-number"
            >{`Pedido ${saleInfo.id}`}</span>
            <span
              class="titleOne"
              data-testid="order-status"
            >{`${saleStatus}`}</span>
          </div>
          <div className="listOrders">
            {saleProduct.map(({ name, quantity, price }, index) => (
              <div key={name}>
                <span
                  data-testid={`${index}-product-qtd`}
                >{`${quantity} - `}</span>
                <span
                  data-testid={`${index}-product-name`}
                >{`${name} - `}</span>
                <span data-testid={`${index}-product-total-value`}>
                  {`R$ ${(price * quantity).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}`}
                </span>
                <span
                  className="product-unit-price"
                  data-testid={`${index}-order-unit-price`}
                >
                  {`(R$ ${price.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}`}
                  )
                </span>
              </div>
            ))}
          </div>

          <h3 data-testid="order-total-value">
            {`R$ ${total_price.toString().replace('.', ',')}0`}
          </h3>

          <button
            type="button"
            data-testid="mark-as-delivered-btn"
            onClick={() => sendPutStatus(id).then(setSaleStatus('Entregue'))}
            className={`sale-${saleStatus}-btn`}
          >
            Marcar como entregue
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminOrderDetails;
